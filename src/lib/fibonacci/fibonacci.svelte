<script lang="ts">
    import { onMount } from "svelte";
    let fibstring1 = "";
    let fibnumber: number | bigint = 50;
    $: {
        if (fibnumber > 2) {
            fibstring1 = "fib("+fibnumber.toString() + ") = " + fibfn2(fibnumber).toString();
        }
    }
    const fibfn2 = (n: number | bigint ) => {
        if (n < 2) return 1;
        let n_1 = BigInt(1),
            n_2 = BigInt(1);
        for (let i = 2; i <= n; i += 1) {
            let n_new = BigInt(n_1) + BigInt(n_2);
            n_1 = n_2;
            n_2 = n_new;
        }
        return n_2;
    };
    onMount(() => {
        fibstring1 = "fib("+fibnumber.toString() + ") = " + fibfn2(fibnumber).toString();
    });
</script>

<style>
    .fibcontainer {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-left: 10%;
        margin-right: 10%;
    }
    textarea {
        height: 500px;
        border-bottom: 100px;
        padding-bottom: 100px;
    }
</style>

<div class="fibcontainer">
    <p>Fibonacci number: {fibnumber}</p>
    <input type="number" bind:value={fibnumber} />
    <textarea name="" id="" cols="200" rows="200">{fibstring1}</textarea>
</div>