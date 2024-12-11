<script>
	export let button_link;
    export let button_cta;
    export let button_label;
    export let bg_color = "Slate";

	import { clsx } from 'clsx';
</script>

<a class={clsx('button', button_cta && 'cta', bg_color === 'Slate' ? 'light' : 'dark')} href="{button_link}">
    {#if button_cta === true}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA500" class="size-8 svgthick">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
    {/if}
    {button_label}
</a>