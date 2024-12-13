<script lang="ts">
  import CTAImageLR from './CTAImageLR.svelte';

    import type { PageData } from './$types';
    import { pageNameStore } from '$lib/stores';
    import Button from '$lib/components/Button.svelte';
    
    // Set the page name
    $pageNameStore = 'Sell Local';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Your Page Title</title>
    <meta name="description" content="Your description" />
    <meta property="og:title" content="Your OG Title" />
</svelte:head>




<CTAImageLR 
    title="WHAT WE’RE ALL ABOUT" 
    src="/the-local-real-estate-group-team-photo-scaled.avif" 
    imageLeft={false}
    bgcolor="white"
    >
            <p class="mt-8 text-sm"><strong>Realtors, Mortgage Advisors, Allies.</strong></p>
            <p> <strong>5.0</strong>&nbsp;Stars - Based on 45 Google Reviews</p>
            <div class="mt-8">
                <Button button_link="/buy-local" bg_color="white" button_label="Buy Local" button_cta={false} />
                <Button button_link="/sell-local" bg_color="white" button_label="Sell Local" button_cta={false} />
                <Button button_link="/meet-the-locals" bg_color="white" button_label="Meet The Team" button_cta={false} />
                <Button button_link="/contact" bg_color="white" button_label="Let's Talk" button_cta={true} />
            </div>
</CTAImageLR>