import { writable } from 'svelte/store'
export let tabsdata = writable({
    titles: new Array<title>(),
    selectedTab: "0"
});
export type title = {
    title: string,
    id: string,
}