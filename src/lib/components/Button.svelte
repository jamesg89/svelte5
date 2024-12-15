<script lang=ts>
	export let button_link: string;
    export let button_cta: boolean;
    export let button_label: string;
    export let bgcolor = "slate";

	import { clsx } from 'clsx';
</script>

<a href={button_link} class={clsx('button', button_cta && 'cta', bgcolor === 'slate' ? 'light' : 'dark')}>
    {#if button_cta === true}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA500" class="size-8 svgthick">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
    {/if}
    {button_label}
</a>