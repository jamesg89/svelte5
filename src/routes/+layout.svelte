<script lang="ts">
	import '../app.css';
	/*import '@fontsource-variable/open-sans';*/
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	const home = $page.url.pathname === '/';
	let { children } = $props();

	
</script>

<Header {home} />
{@render children()}
<Footer />