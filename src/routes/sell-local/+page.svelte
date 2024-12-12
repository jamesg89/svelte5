<script lang="ts">
    import type { PageData } from './$types';
    import { pageNameStore } from '$lib/stores';
    
    // Set the page name
    $pageNameStore = 'Sell Local';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Your Page Title</title>
    <meta name="description" content="Your description" />
    <meta property="og:title" content="Your OG Title" />
</svelte:head>
<div class="mt-96 mb-96">
    <p>Hey</p>
</div>