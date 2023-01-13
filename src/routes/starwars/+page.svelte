<script lang="ts">
	import { onMount } from 'svelte';
	import { people, ships, planets, vehicles, species, films, loadAll } from '$lib/starwars/store';
	import Tabs from '$lib/tabs/tabs.svelte';
	import Tab from '$lib/tabs/tab.svelte';
	import SWPanel from '$lib/starwars/starwarspanel.svelte';
	$: starwarsdata = [
		{ id: '1', store: $people, title: 'People' },
		{ id: '2', store: $ships, title: 'Ships' },
		{ id: '3', store: $planets, title: 'Planets' },
		{ id: '4', store: $species, title: 'Species' },
		{ id: '5', store: $films, title: 'Films' },
        { id: '6', store: $vehicles, title: 'Vehicles' }
	];
	onMount(() => {
		loadAll();
	});
	$: selectedTab = '1';
</script>

{#if starwarsdata && starwarsdata.length > 0}
	<Tabs bind:selectedTab>
		{#each starwarsdata as item}
			<Tab title={item.title} id={item.id}>
				<SWPanel
					header={item.store.header}
					rows={item.store.rows}
					next={item.store.next}
					previous={item.store.previous}
				/>
			</Tab>
		{/each}
	</Tabs>
{/if}