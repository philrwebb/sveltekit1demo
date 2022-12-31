<script lang="ts"></script>
<div class="content">
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/content">Content</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/audioplayer">Player</a>
		</li>
        <li>
            <a href="/tabsdemo">Tabs Demo</a>
        </li>
        <li>
            <a href="/listdemo">List Demo</a>
        </li>
	</ul>

	<slot>No Javascript installed</slot>
</div>

<style>
    :global(body)
    {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
    }
    :global(.container) {
        display: grid;
        grid-template-columns: 1fr;
        text-align: justify;
    }
	.content {
        margin: auto;
        width: 80%;
        padding: 10px;
	}
	ul {
		list-style: none;
		display: flex;
        justify-content: space-between;		
	}
	a {
		text-decoration: none;
		color: blue;
	}
	a:hover {
		color: lightblue;
	}
    a:visited {
        color: purple;
    }
</style>
