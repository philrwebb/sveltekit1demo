import { writable } from 'svelte/store';
// import http from './httpStore.js';

export const count = writable(0);

export const treevalue = writable(
    {
        label: "USA",
        children: [
            {
                label: "Florida",
                children: [
                    { label: "Jacksonville", children: [{ label: "WalMart" },] },
                    {
                        label: "Orlando",
                        children: [
                            { label: "Disney World" },
                            { label: "Universal Studio" },
                            { label: "Sea World" },
                        ],
                    },
                    { label: "Miami" },
                ],
            },
            {
                label: "California",
                children: [
                    { label: "San Francisco" },
                    { label: "Los Angeles" },
                    { label: "Sacramento" },
                ],
            },
        ],
    }
);

export const selectedNode = writable(
    {
        label: "non selected",
        children: []
    },
)

export const rowsdata = writable(
    [
        [1, "lemons ", "pears  ", "apples ", "melons"],
        [2, "white  ", "yellow ", "orange ", "pink"],
        [3, "goodbye", "ciao   ", "whatsup", "ooroo"],
        [4, "white  ", "yellow ", "orange ", "pink"],
        [5, "goodbye", "ciao   ", "whatsup", "ooroo"],
        [6, "lemons ", "pears  ", "apples ", "melons"],
        [7, "lemons ", "pears  ", "apples ", "melons"],
        [8, "white  ", "yellow ", "orange ", "pink"],
        [9, "goodbye", "ciao   ", "whatsup", "ooroo"],
        [10, "white  ", "yellow ", "orange ", "pink"],
        [11, "goodbye", "ciao   ", "whatsup", "ooroo"],
    ]
)
export const headerdata = writable(
    [
        "Fruit1", "Fruit2", "Fruit3", "Fruit4", "Fruit5",
    ]
)

// // create store and set initial value
// export const covidSummary = http({});

// // any component can subscribe to changes
// covidSummary.subscribe($covidSummary => console.log('Cart was updated: ', $covidSummary))

// // issue HTTP GET to refresh summary
// covidSummary.get('https://api.covid19api.com/summary')
// // prints: Cart was updated: ...