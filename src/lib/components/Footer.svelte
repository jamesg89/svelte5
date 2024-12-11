<script>
    import WordMark from "./WordMark.svelte";
    import CircleLogo from "./CircleLogo.svelte";
    import Oakwyn from "./Oakwyn.svelte";
	import Tmg from "./Tmg.svelte";
    import ContactForm from "./ContactForm.svelte";

    import { navigation } from "./config/navigation";
</script>

    <footer class="py-10 text-white">
        <div class="container mb-4 flex flex-col md:flex-row justify-between mx-auto">
            <ContactForm />
        </div>
        <div class="container pt-12 mb-4 flex flex-col md:flex-row justify-between mx-auto">
            <hr class="w-full" />
        </div>
        <div class="container pt-12 pb-4 mx-auto flex flex-col md:flex-row justify-between">
            <!-- Logo and Disclaimer Section - Set to 40% width -->
            <div class="flex-1 md:basis-2/5 mb-6 md:mb-0">
                <div class="flex items-center mb-4">
                    <CircleLogo Class="mr-2" />
                    <WordMark />
                </div>
                
                <p class="max-w-sm leading-relaxed" style="font-size: 11px;">
                    The Local Real Estate Group is a real estate team with multiple years of award winning service, licensed through Oakwyn Realty Ltd. This is not an offer for sale. Not intended to induce breach of an existing agency agreement.
                </p>
                <div class="flex items-center mt-4">
                    <Oakwyn width="40" Class="mr-2" />
                    <Tmg width="40" Class="mr-2" />
                    <p class="max-w-sm leading-relaxed italic mt-2" style="font-size: 8px;"> In Collaboration with Oakwyn Realty Ltd, and TMG The Mortgage Group</p>
                
                </div>
            </div>

            <!-- Fast Access Links - Set to remaining space -->
            <div class="flex-1 mb-6 md:mb-0">
                <h3 class="text-lg font-semibold mb-4">Fast Access</h3>
                <ul class="space-y-2">
                    {#each navigation as item (item.label)}
                        <li class="text-sm hover:text-gray-dark">
                            <a href={item.link}>
                                {item.label}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Contact Information - Set to remaining space -->
            <div class="flex-1">
                <h3 class="text-lg font-semibold mb-4">Get In Touch</h3>
                <p class="text-sm mb-2"><strong>Phone:</strong> 604.505.1858</p>
                <p class="text-sm mb-2"><strong>Email:</strong> admin@local.group</p>
                <p class="text-sm mb-4"><strong>Address:</strong> 3151 Woodbine Dr #101, North Vancouver, BC V7R 2S4</p>
                
                <!-- Social Icons -->
                <div class="flex space-x-4 mt-4">
                    <a class="text-white hover:text-gray-dark" aria-label="Visit The Local Real Estate Group Facebook" href="https://www.facebook.com/VancouverRealEstateSpecialist" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-5">
                        <path fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg>
                    </a>
                    <a class="text-white hover:text-gray-dark" aria-label="Visit The Local Real Estate Group Instagram" href="https://www.instagram.com/thelocal.group/" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5">
                            <path fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg>
                    </a>
                    <a class="text-white hover:text-gray-dark" aria-label="Visit The Local Real Estate Group YouTube" href="https://www.youtube.com/@thelocalgroup" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5">
                            <path fill="currentColor"
                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>