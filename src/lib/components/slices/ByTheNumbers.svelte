<script lang="ts">
	import { clsx } from 'clsx';

    export let bg_color: "White" | "Slate" | "Gray" = "White";
</script>

<section class="{clsx('', bg_color=== "White" ? "bg-white" : bg_color === 'Slate' ? 'bg-slate text-white' :  bg_color === 'Gray' ? 'bg-gray-default' :'bg-white')}">
		<div class="container flex flex-col relative z-10 justify-between items-center h-full text-center">
			<div class="mt-8 md:mt-0 w-full"><h2 class="text-5xl font-bold mb-12">By The Numbers</h2> <div class="flex flex-col md:flex-row gap-10 w-full items-center justify-center lg:justify-between px-0 mx-auto flex-wrap align-bottom"><div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48"><h3 class="text-3xl font-bold text-center">17,000+</h3>  <p>Unique Website Visitors 2022</p> </div><div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48"><h3 class="text-3xl font-bold text-center">40,000+</h3>  <p>Website Page Views 2022</p> </div><div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48"><h3 class="text-3xl font-bold text-center">$225m+</h3>  <p>Total Value of Real Estate Sales</p> </div><div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48"><h3 class="text-3xl font-bold text-center">Top 10%</h3>  <p>Of All Realtors By # Of Homes Sold 2022</p> </div></div></div>
		</div>
</section>
