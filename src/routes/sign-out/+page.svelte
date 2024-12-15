<script lang="ts">
    import type { PageData } from './$types';
    import { pageNameStore } from '$lib/stores';
    
    // Set the page name
    $pageNameStore = 'Home';

    let { data }: { data: PageData } = $props();
</script>

<div class="section"><p>You done been logged out sucka foo!</p></div>