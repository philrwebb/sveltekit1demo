<script lang="ts">
	import Row from './row.svelte';
	export let rowdata: any[][];
	export let headerdata: string[];
	export let sortCol = 0;
	const gap = '1px';
	const compareDesc = (a: any, b: any) => {
		if (
			(!isNaN(a[sortCol]) && Number(a[sortCol]) < Number(b[sortCol])) ||
			(isNaN(a[sortCol]) && a[sortCol] < b[sortCol])
		) {
			return 1;
		} else {
			return -1;
		}
	};
	const compareAsc = (a: any, b: any) => {
		if (
			(!isNaN(a[sortCol]) && Number(a[sortCol]) > Number(b[sortCol])) ||
			(isNaN(a[sortCol]) && a[sortCol] > b[sortCol])
		) {
			return 1;
		} else {
			return -1;
		}
	};
	$: sortAsc = true;
	$: compareFunc = sortAsc ? compareAsc : compareDesc;
	$: rowdata = [...rowdata.sort(compareFunc)];
	function sortColumn(event: any) {
		let clickedColumn = event.detail.cellno;
		if (clickedColumn !== sortCol) {
			sortAsc = !sortAsc;
		} else {
			sortAsc = !sortAsc;
		}
		sortCol = clickedColumn;
	}
</script>

<div class="listcontainer" style="grid-gap: {gap}">
	{#if headerdata}
		<Row rowvalue={headerdata} on:columnSelected={sortColumn} rowType="Header" />
	{/if}
	{#each rowdata as rowvalue, rowno}
		<Row {rowvalue} on:rowSelected {rowno} on:columnSelected={sortColumn} />
	{:else}
		Loading . . .
	{/each}
</div>

<style>
	.listcontainer {
		display: grid;
		cursor: pointer;
	}
</style>
