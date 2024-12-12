<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    export let pageName: string;

    const home = pageName === "Home";
</script>


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
        {pageName}
      </h1>
  </div>	
  </section>
{/if}

