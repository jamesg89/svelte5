<script lang="ts">
    import type { PageData } from './$types';
    import AwardSection from '$lib/components/slices/AwardSection.svelte';
    import ByTheNumbers from '$lib/components/slices/ByTheNumbers.svelte';
    import CoreValues from '$lib/components/slices/CoreValues.svelte';
    import { pageNameStore } from '$lib/stores';
    
    // Set the page name
    $pageNameStore = 'Home';

    let { data }: { data: PageData } = $props();
</script>

<AwardSection bg_color="White" />
<ByTheNumbers bg_color="Gray" />
<CoreValues bg_color="Slate" />
