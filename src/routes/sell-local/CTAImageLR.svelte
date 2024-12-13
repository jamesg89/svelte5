<script lang="ts">
    import clsx from 'clsx';
    export let src: string;
    export let imageLeft: boolean;
    export let title: string;
    export let bgcolor: string;

</script>

<section class="{clsx(bgcolor === "slate" ? "bg-slate text-white" : "bg-white text-slate")}">
    <div class="{clsx('container flex flex-col relative z-10 gap-5 justify-around items-center h-full md:flex-row', imageLeft===false ? " md:flex-row" : "md:flex-row-reverse space-x-reverse")}">
            <div class="w-full min-w-[480px] md:w-1/2 mt-8 md:mt-0"> 
                <h2 class="text-6xl font-bold">{title}</h2> 
                <slot></slot>
            </div> 
            <div class="w-full min-w-[480px] md:w-1/2 opacity-90 p-0">
                <img {src} alt="{title}" class="max-h-[900px] w-auto">
            </div>
    </div>
</section>
