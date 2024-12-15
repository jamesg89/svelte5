<script lang="ts">
    import clsx from 'clsx';
    export let title: string;
    export let bgcolor: string;
    export let number: number | undefined = undefined;
    export let content: string;
    export let imgsrc: string | undefined = undefined;

</script>

<section class="{clsx(bgcolor === "slate" ? "bg-slate text-white" : "bg-white text-slate")}">
    <div class="container flex flex-col relative z-10 justify-between items-center h-full text-center">
        <div class="mt-8 md:mt-0 mx-0 px-0">
            <!-- Numbered Title Section (If Set)-->
            {#if number}
                <h3 class="text-lg">	
                    {number}
                </h3>
            {/if}

            <!-- Title -->
            <h2 class="text-6xl font-bold">{title}</h2>

            
            <!-- Content Section -->
             {@html content}

            <!-- Imager Section (If Set)-->
            {#if imgsrc}
                <div class="w-full min-w-[480px] md:w-1/2 opacity-90 p-0">
                    <img src={imgsrc} alt="{title}" class="max-h-[900px] w-auto">
                </div>
            {/if}
                  
            <!-- Button Section (If Set)-->       
            <slot></slot>
        </div> 
    </div>
</section>
