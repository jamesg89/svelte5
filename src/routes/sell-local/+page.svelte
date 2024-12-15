<script lang="ts">
    import CTAImageLR from '$lib/components/slices/CTAImageLR.svelte';
    import type { PageData } from './$types';
    import { pageNameStore } from '$lib/stores';
    import Button from '$lib/components/Button.svelte';
    import CtaCentered from '$lib/components/slices/CTACentered.svelte';
    
    // Set the page name
    $pageNameStore = 'Sell Local';

    let { data }: { data: PageData } = $props();
</script>




<CTAImageLR 
    title="WHAT WE’RE ALL ABOUT" 
    imgsrc="/the-local-real-estate-group-team-photo-scaled.avif" 
    imageLeft={false}
    bgcolor="slate"
    >
            <p class="mt-8"><strong>Realtors, Mortgage Advisors, Allies.</strong></p>
            <p> <strong>5.0</strong>&nbsp;Stars - Based on 45 Google Reviews</p>
            <div class="mt-8">
                <Button button_link="/buy-local" bgcolor="slate" button_label="Buy Local" button_cta={false} />
                <Button button_link="/sell-local" bgcolor="slate" button_label="Sell Local" button_cta={false} />
                <Button button_link="/meet-the-locals" bgcolor="slate" button_label="Meet The Team" button_cta={false} />
                <Button button_link="/contact" bgcolor="slate" button_label="Let's Talk" button_cta={true} />
            </div>
</CTAImageLR>

<CtaCentered
    title="The 4 Step Home Buying System" 
    bgcolor="slate"
>
    <p class="mt-4 mb-4">Our system is designed to be a stress free, easy and empowered home buyer experience</p>
    <Button button_link="/buy-local" bgcolor="slate" button_label="Start Your Search" button_cta={true} />
</CtaCentered>