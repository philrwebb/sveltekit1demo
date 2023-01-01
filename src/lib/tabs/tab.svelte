<script lang="ts">
	import { onDestroy } from 'svelte';
	import { tabsdata } from './tabs.js';
	export let title: string;
	export let id: string;
	registerTab(id, title);
	onDestroy(() => {
		unregisterTab(id);
	});
	function registerTab(id: string, title: string) {
		$tabsdata.titles = [...$tabsdata.titles, { title, id }];
		console.log($tabsdata.titles);
	}
	function unregisterTab(id: string) {
		const tabIndex = $tabsdata.titles.findIndex((title) => title.id === id);
		if (tabIndex > -1) {
			$tabsdata.titles.splice(tabIndex, 1);
			$tabsdata.titles = [...$tabsdata.titles];
		}
	}
</script>

<div>
	{#if $tabsdata.selectedTab === id}
		<slot />
	{/if}
</div>
