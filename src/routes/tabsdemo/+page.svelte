<script lang="ts">
	import Tabs from '$lib/tabs/tabs.svelte';
	import Tab from '$lib/tabs/tab.svelte';
	import Fib from '$lib/fibonacci/fibonacci.svelte';
	import AudioPlayer, { stopAll } from '../../lib/audioplayer/audioplayer.svelte';
	$: selectedTab = '1';
</script>

<Tabs bind:selectedTab>
	<Tab id="1" title="Fibonacci">
		<Fib />
	</Tab>
	<Tab id="2" title="Audioplayer">
		<button on:click={stopAll}>
			stop all audio
		</button>
		
		<!-- https://musopen.org/music/9862-the-blue-danube-op-314/ -->
		<AudioPlayer
			src="https://sveltejs.github.io/assets/music/strauss.mp3"
			title="The Blue Danube Waltz"
			composer="Johann Strauss"
			performer="European Archive"
		/>
		
		<!-- https://musopen.org/music/43775-the-planets-op-32/ -->
		<AudioPlayer
			src="https://sveltejs.github.io/assets/music/holst.mp3"
			title="Mars, the Bringer of War"
			composer="Gustav Holst"
			performer="USAF Heritage of America Band"
		/>
		
		<!-- https://musopen.org/music/8010-3-gymnopedies/ -->
		<AudioPlayer
			src="https://sveltejs.github.io/assets/music/satie.mp3"
			title="Gymnopédie no. 1"
			composer="Erik Satie"
			performer="Prodigal Procrastinator"
		/>
		
		<!-- https://musopen.org/music/2567-symphony-no-5-in-c-minor-op-67/ -->
		<AudioPlayer
			src="https://sveltejs.github.io/assets/music/beethoven.mp3"
			title="Symphony no. 5 in Cm, Op. 67 - I. Allegro con brio"
			composer="Ludwig van Beethoven"
			performer="European Archive"
		/>
		
		<!-- https://musopen.org/music/43683-requiem-in-d-minor-k-626/ -->
		<AudioPlayer
			src="https://sveltejs.github.io/assets/music/mozart.mp3"
			title="Requiem in D minor, K. 626 - III. Sequence - Lacrymosa"
			composer="Wolfgang Amadeus Mozart"
			performer="Markus Staab"
		/>
	</Tab>
	<Tab id="3" title="Tab 3">
		<h1>Tab 3</h1>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia labore a sunt id repudiandae
			tempora vero aperiam quae ullam error nulla animi et similique, fugiat dolore facilis libero,
			eos officia.
		</p>
	</Tab>
</Tabs>
