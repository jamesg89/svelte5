<script lang="ts">
	import '../app.css';
	/*import '@fontsource-variable/open-sans';*/
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import { pageNameStore } from '$lib/stores';

	let { children } = $props();

	
</script>

<svelte:head> 
    <title>{$pageNameStore} - The Local Real Estate Group</title>
    <meta name="description" content="{$pageNameStore} - Residential Real Estate services for Vancouver and the Lower Mainland. The Local Real Estate Group offers buying and selling and mortgage funding." />
    <meta property="og:title" content="{$pageNameStore}" />
</svelte:head>

<Header />
{@render children()}
<Footer />