<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let cellvalue: any;
    export let rowType = "Row";
    let displayValue: string | number;

    $: displayValue = !isNaN(cellvalue)
        ? Number(cellvalue).toLocaleString()
        : cellvalue;
    export let cellno = 0;
    export let rowno = 0;
    function sendMessage() {
        if (rowno === 0 && rowType === "Header") {
            dispatch("columnSelected", {
                cellno: cellno,
            });
        }
    }
</script>

{#if !isNaN(cellvalue)}
    <span class="number" on:click|self={sendMessage} on:keydown|self={sendMessage}> {displayValue} </span>
{:else if rowType === "Header"}
    <span class="header" on:click|self={sendMessage} on:keydown|self={sendMessage}>{displayValue}</span>
{:else}
    <span on:click|self={sendMessage} on:keydown|self={sendMessage}>{displayValue}</span>
{/if}

<style scoped>
    span {
        border: black 0.5px solid;
        padding-left: 2px;
        padding-right: 2px;
        padding-top: 1px;
        padding-bottom: 1px;
        text-align: left;
    }
    .number {
        text-align: right;
    }
    .header {
        text-align: center;
    }
</style>