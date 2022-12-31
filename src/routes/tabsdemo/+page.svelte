<script lang="ts">
	import Tabs from '$lib/tabs/tabs.svelte';
	import Tab from '$lib/tabs/tab.svelte';
	import Fib from '$lib/fibonacci/fibonacci.svelte'
	$: selectedTab = '1';
</script>

<Tabs bind:selectedTab>
	<Tab id="1" title="Fibonacci">
		<Fib />
	</Tab>
	<Tab id="2" title="Tab 2">
		<h1>Tab 2</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic nihil molestias in
			quibusdam itaque, praesentium vel repudiandae adipisci earum.
		</p>
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
