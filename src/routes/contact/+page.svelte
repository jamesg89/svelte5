<script lang="ts">
    import type { PageData } from './$types';
    import { pageNameStore } from '$lib/stores';
    
    // Set the page name
    $pageNameStore = 'Contact';

    let { data }: { data: PageData } = $props();
</script>
