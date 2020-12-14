<script>
	export let components, allComponents;
</script>

{#each components as {name, fields}}	
	<svelte:component this={allComponents["layout_components_" + name + "_svelte"]} {...fields} />
{/each}

<style>
</style>