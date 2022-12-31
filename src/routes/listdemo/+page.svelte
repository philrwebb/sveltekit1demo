<script lang="ts">
	import List from '$lib/listview/list.svelte';
	import { rowsdata, headerdata } from '$lib/testdata/store.js';
</script>

<div>
	{#if $rowsdata.length > 0}
		<List rowdata={$rowsdata} headerdata={$headerdata} />
	{:else}
		<p>loading . . .</p>
	{/if}
</div>

<style>
	div {
		width: 100%;
	}
</style>
