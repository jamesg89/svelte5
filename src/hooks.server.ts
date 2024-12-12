// src/hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks';
import { CLERK_SECRET_KEY } from '$env/static/private';
import { handleClerk } from 'clerk-sveltekit/server';
import { Clerk } from '@clerk/backend';
import type { Handle } from '@sveltejs/kit';

const clerk = Clerk({ secretKey: CLERK_SECRET_KEY });

const serverLog = (message: string, data?: any) => {
    const logMessage = `\n------------------------\nCLERK CHECK: ${message}\n${data ? JSON.stringify(data, null, 2) : ''}\n------------------------\n`;
    console.log(logMessage);
};

const checkUserAge: Handle = async ({ event, resolve }) => {
    try {
        serverLog('Initial locals check', {
            hasLocals: !!event.locals,
            localsKeys: event.locals ? Object.keys(event.locals) : [],
            entireLocals: event.locals
        });

        if (!event.locals?.session) {
            serverLog('Session object missing', {
                url: event.url.pathname,
                method: event.request.method
            });
            return await resolve(event);
        }

        const userId = event.locals.session.userId;
        serverLog('Session check', {
            hasUserId: !!userId,
            sessionObject: event.locals.session
        });
        
        if (!userId) {
            serverLog('No user ID found - might be an unauthenticated request');
            return await resolve(event);
        }

        try {
            const user = await clerk.users.getUser(userId);
            
            // Check if user is already banned
            if (user.publicMetadata?.banned || user.publicMetadata?.unbanned === true) {
                serverLog('User is already banned or immune from being banned, skipping age check', {
                    userId: user.id
                });
                return await resolve(event);
            }

            serverLog('User details found', {
                id: user.id,
                createdAt: user.createdAt,
                metadata: user.publicMetadata
            });

            const createdAt = new Date(user.createdAt);
            const now = new Date();
            const thirtyDaysInMs = 1000;
            const accountAge = now.getTime() - createdAt.getTime();
            
            serverLog('Age calculation', {
                createdAt: createdAt.toISOString(),
                now: now.toISOString(),
                ageInDays: Math.floor(accountAge / (24 * 60 * 60 * 1000)),
                isOlderThan30Days: accountAge > thirtyDaysInMs
            });

            if (accountAge > thirtyDaysInMs) {
                serverLog('Attempting to update user metadata');
                try {
                    const updateResult = await clerk.users.updateUser(userId, {
                        publicMetadata: { banned: true , unbanned: false}
                    });
                    serverLog('Update successful', {
                        newMetadata: updateResult.publicMetadata
                    });

                    return new Response(null, {
                        status: 303,
                        headers: {
                            Location: '/sign-out'
                        }
                    });
                } catch (updateError) {
                    serverLog('Update failed', {
                        error: updateError.message,
                        stack: updateError.stack
                    });
                }
            }
        } catch (userError) {
            serverLog('Error fetching/updating user', {
                error: userError.message,
                stack: userError.stack
            });
        }
    } catch (error) {
        serverLog('Fatal error', {
            error: error.message,
            stack: error.stack,
            locals: event.locals
        });
    }

    return await resolve(event);
};

export const handle: Handle = sequence(
    handleClerk(CLERK_SECRET_KEY, {
        debug: true,
        protectedPaths: ['/admin'],
        signInUrl: '',
    }),
    checkUserAge
);