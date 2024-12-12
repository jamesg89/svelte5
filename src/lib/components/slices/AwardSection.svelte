<script lang="ts">
	import { clsx } from 'clsx';
    import Oakwyn from '../Oakwyn.svelte';
    import Tmg from '../Tmg.svelte';

    export let bg_color: "White" | "Slate" | "Gray" = "White";
</script>

<section class="{clsx('', bg_color=== "White" ? "bg-white" : bg_color === 'Slate' ? 'bg-slate' :  bg_color === 'Gray' ? 'bg-gray-default' :'bg-white')}">
		<div class="container flex flex-col relative z-10 justify-between items-center h-full text-center">  
            <div class="mt-8 md:mt-0 w-full">
				<h2 class="text-5xl font-bold mb-12">	
					AWARD WINNING SERVICE
				</h2>
			        <!-- Oakwyn -->
					<div class="flex flex-col md:flex-row gap-10 w-full items-center justify-center lg:justify-between px-0 mx-auto flex-wrap align-bottom">
						    <div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48">
								<span class="max-h-48 max-w-48 text-center m-auto">
                                    <Oakwyn width="180px" />
                                </span>
								<p>	
									Oakwyn Realty Top Producer
								</p>
							</div>

                    <!-- Medallion -->
                            <div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48">
								<span class="max-h-48 max-w-48 text-center m-auto">
                                    <img src="/big-medallion-club-vancouver-award-300x300.png" width="180px" alt="fancy award for top 10% of all Realtors" />
                                </span>
								<p>	
									Top 10% of Greater Vancouver Realtor
								</p>
							</div>

                    <!-- TMG -->
                            <div class="flex flex-1 flex-col gap-4 align-bottom text-center min-w-44 max-w-48">
								<span class="max-h-48 max-w-48 text-center m-auto">
                                    <Tmg width="180px" />
                                </span>
								<p>	
									Million Dollar Mortgage Club
								</p>
							</div>
					</div>
			</div>
</section>
