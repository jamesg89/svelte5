<script lang="ts">
	import { clsx } from 'clsx';

    export let bg_color: "White" | "Slate" | "Gray" = "White";
</script>

<section class="{clsx('', bg_color=== "White" ? "bg-white" : bg_color === 'Slate' ? 'bg-slate text-white' :  bg_color === 'Gray' ? 'bg-gray-default' :'bg-white')}">
    <div class="container text-white py-8 flex flex-col lg:flex-row lg:items-center gap-x-10">
        <!-- Left Section -->
        <div class="lg:w-1/3 mb-8 lg:mb-0">
            <h3 class="text-lg font-semibold mb-2">
                The Local Real Estate Group
            </h3>
            <h2 class="text-5xl font-bold mb-4">
                Core Values
            </h2> 
            <p class="text-sm leading-relaxed">
                Our Culture is Our Commitment. Committed to improving industry from the inside out. Our core values hold strong in our culture and in our day to day businesses. Oakwyn Realtors come together over these 7 core values.
            </p>
        </div> 

        <!-- Right Section -->
        <div class="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h3 class="text-2xl mb-4">
                    Put People First
                </h3> 
                <p class="text-sm leading-relaxed">
                    Put the relationship side of business first. It’s the most important part of what we do. Be respectful. Listen intently. Anticipate issues. And strive to make meaningful connections. We believe when we put relationships above all else, in every instance, everyone wins.
                </p>
            </div>
            <div>
                <h3 class="text-2xl mb-4">
                    Innovative Service
                </h3>
                <p class="text-sm leading-relaxed">
                    What can you do today that has never been done before? To change the way the industry works, we have to change how we work. So question everything. Find new ways to do old things. Surpass your client’s expectations in even the smallest of ways.
                </p>
            </div>
            <div>
                <h3 class="text-2xl mb-4">
                    Real Estate Nerds
                </h3> 
                <p class="text-sm leading-relaxed">
                    Love what you do. A lot. And find new ways to love it each and every day. There’s so much to learn, so many new trends to stay on top of in our industry. Relationships to build. Goals to meet. Be a student of our craft and share what you learn with your peers. Our passion is infectious.
                </p>
            </div>
            <div>
                <h3 class="text-2xl mb-4">
                    Embrace &amp; Drive Change
                </h3>
                <p class="text-sm leading-relaxed">
                    We work in a dynamic, always-changing business, and we want to be the ones leading that change, rather than reacting to it. So be bold. Be a leader. We’re also open to change on the inside. If there’s something that could be improved internally, be bold and bring it up. If we can’t embrace change on the inside, we can’t drive it on the outside.
                </p>
            </div>
        </div>
</section>