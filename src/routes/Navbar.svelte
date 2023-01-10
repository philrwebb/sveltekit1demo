<script>
    import { page } from "$app/stores";

    const navs = [
        {
        title: "Home",
        href: "/"
        },
        {
        title: "About",
        href: "/about"
        },
        {
        title: "Content",
        href: "/content"
        },
        {
        title: "Blog",
        href: "/blog"
        },
        {
        title: "Player",
        href: "/audioplayer"
        },
        {
        title: "Tabs Demo",
        href: "/tabsdemo"
        },
        {
        title: "List Demo",
        href: "/listdemo"
        },
        {
        title: "Starwars API",
        href: "/starwars"
        },
    ]
    $: routeId = $page.route.id;

</script>

<div class="content">
	<ul>
        {#each navs as nav}
            <li>
                <a href={nav.href} class:active={routeId == nav.href}>{nav.title}</a>
            </li>
        {/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
		display: flex;
        justify-content: space-evenly;		
	}
    li {
        display: flex;
        justify-content: space-between;
    }
	a {
		text-decoration: none;
		color: #aaa;
        padding: 2px 2px;
	}

    .content {
        background-color: black;
        margin: 20px auto;
        width: 100%;
    }
    .active {
        color: white;
    }
</style>
