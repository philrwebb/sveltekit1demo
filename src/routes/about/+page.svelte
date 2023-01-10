<h1>About</h1>
<div class="container">
	<p>
		This is a demo site created using sveltekit 1.0. It is a work in progress. The site uses several
		svelte components that I have created and will publish on npm. These include:
	</p>
	<ul>
		<li>
			<h2>A Tabs Component</h2>
			<p>
				A fairly simple component that allows you to create a Tabs container with multiple contained
				Tab Each tab can contain other components (the example has two tabs with one displaying an
				audioplayer and the other a listview)
			</p>
		</li>
		<li>
			<h2>A List Component</h2>
			<p>
				The component expects to receive an array (rows) of arrays (columns in row) and will display
				in a grid. The component correctly formats numbers and will sort by clicking on header of
				each row
			</p>
		</li>
	</ul>
</div>

<style>
	ul {
		list-style: none;
	}
</style>
