<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<div class="container">
	<Navbar />
</div>

<div class="container">
	<slot>No Javascript installed</slot>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
	}
	:global(.container) {
		display: grid;
		grid-template-columns: 1fr;
		text-align: justify;
		justify-content: space-around;
		max-width: 1280px;
		margin: 0 auto;


	}
	:global(.content) {
		margin: 0 auto;
		max-width: 1280px;
		width: 80%;
		/* padding: 10px; */
	}
</style>
