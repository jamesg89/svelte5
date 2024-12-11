<script>
  import WordMark from "./WordMark.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { navigation } from "./config/navigation";
  export let home;

  let scrolled = false;
  let isOpen = false;

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
      <button aria-label="Hamburger menu to open menu" on:click={toggleMenu} class="{home ? 'hover:text-slate focus:text-white text-white' : 'hover:text-gray-default text-slate'} ${isOpen ? 'text-gray-light' : 'text-white'} focus:outline-none">
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
  
    <button on:click={toggleMenu} aria-label="Hamburger menu to open menu" class="text-white hover:text-gray-default focus:text-gray-default focus:outline-none">
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
          <a href={item.link} on:click={toggleMenu} class="inline-flex items-center">
            {item.label}
          </a>
        </div>
      {/each}
  </nav>

</div>
  </nav>
</header>
