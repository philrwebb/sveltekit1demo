<script>
	import AudioPlayer, { stopAll } from '../../lib/audioplayer/audioplayer.svelte';
	import { data } from './store';
</script>

<div class="container">
	<button on:click={stopAll}> stop all audio </button>

	{#each $data as item}
		<AudioPlayer {...item} />
	{/each}
</div>

<style>
	button {
		margin: 10px;
	}
</style>