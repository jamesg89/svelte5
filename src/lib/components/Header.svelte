<script>
  import WordMark from "./WordMark.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { navigation } from "./config/navigation";
  import Button from '$lib/components/Button.svelte';
  import { pageNameStore } from '$lib/stores';

  let scrolled = $state(false);
  let isOpen = $state(false);

	const home = $derived($pageNameStore.trim() === 'Home');

  // Handle Hamburger Menu toggling the left to right navigation showing
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  // Changes appearance of navigation when scrolling down
  const handleScroll = () => {
    scrolled = window.scrollY > 40;
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<!-- Nav and Main Header -->
<header class="{scrolled ? 'transparent' : 'default'} {home ? 'hover:text-slate text-white' : 'hover:text-gray-default text-slate'} fixed top-0 w-full z-50 duration-300 transition-transform ease-in">
  <nav class="container flex items-center justify-between py-4" aria-label="header">
    <!-- Logo -->
        <a href="/"><WordMark Clr={scrolled ? "#fff" : (home ? "#fff" : "#222222")} /></a>
        <span class="sr-only">The Local Real Estate Group</span>
        
        <!-- Desktop Menu -->
        <ul class="md:flex gap-6 hidden">
          {#each navigation as item (item.label)}
            <li class="{home ? 'hover:text-slate text-white' : 'hover:text-gray-default text-slate'} ">
              <a href={item.link} class="inline-flex items-center">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
    <!-- Hamburger Button (Mobile) -->
    <div class="md:hidden flex ml-auto items-center">
      <button aria-label="Hamburger menu to open menu" onclick={toggleMenu} class="{home ? 'hover:text-slate focus:text-white text-white' : 'hover:text-gray-default text-slate'} ${isOpen ? 'text-gray-light' : 'text-white'} focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>




    <!-- Mobile Menu -->
<div
  class={`md:hidden fixed inset-0 left-0 w-64 bg-slate/100 shadow-lg shadow-slate transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
>
  <!-- Logo -->
  <div class="px-4 pt-6 flex justify-between">
    <a href="/"><WordMark Clr="#fff" /></a>
  
    <button onclick={toggleMenu} aria-label="Hamburger menu to open menu" class="text-white hover:text-gray-default focus:text-gray-default focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  
  </div>

  <!-- Navigation Menu -->
  <nav class="mt-6 bg-slate/100 h-screen">
    <!-- Desktop Menu -->
      {#each navigation as item (item.label)}
        <div class="hover:text-slate text-white text-lg p-4">
          <a href={item.link} onclick={toggleMenu} class="inline-flex items-center">
            {item.label}
          </a>
        </div>
      {/each}
  </nav>

</div>
  </nav>
</header>


<!-- Hero/Title Section -->
{#if home === true}
<section class="relative h-screen bg-cover bg-center" style="background-image: url('/static/assets/hero.jpg');">
		<div class="absolute inset-0 bg-slate/50"></div>
		<div class="container relative z-10 flex items-center h-full text-white pl-0">
			<div class="w-full text-left">
				<h1 class="lg:text-[85px] lg:max-w-4xl text-6xl font-black md:text-7xl md:leading-snug">							
                    The Locals Have Your Back
				</h1>
				<p class="mt-4 text-lg md:text-xl">
					From mortgages to buying, staging to selling, and beyond. We’ve got you. #TheLocalExperience
				</p>
				<div class="mt-8 lg:max-w-2xl">
					<Button button_label="Meet The Locals." button_link="/meet-the-locals" button_cta={false} />
                    <Button button_label="Get In Touch." button_link="/contact" button_cta={true} />
                    <Button button_label="Start Your Search." button_link="/sell-local" button_cta={false} />
				</div>
			</div>
		</div>	
</section>
{:else}
  <section class="bg-white my-0 pb-0">
    <div class="container py-0 my--4 z-10 flex text-slate items-center pl-0 overflow-hidden">
      <h1 class="text-6xl line-e mb-0 pt-0 font-black md:text-8xl md:leading-none">
        {$pageNameStore}
      </h1>
  </div>	
  </section>
{/if}




<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    transition: background-color 0.5s ease, border 0.5s ease;
  }

  header.transparent {
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom: 2px black solid;
    color:white;
  }

  header.transparent li {
    color:white;
  }

  header.default {
    background-color: transparent;
    border-bottom: none;
  }
</style>