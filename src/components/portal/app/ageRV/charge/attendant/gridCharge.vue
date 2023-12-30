<script>
export default {
    name: "gridCharge",
    props: {
        gridItens: Array,
    }
}
</script>

<template>
    <div class="grid-container">

        <div class="grid-params">
            <div class="grid-item" v-for="(item, index) in gridItens" :key="index">
                <div class="title-item">
                    {{ item.title }}
                </div>
                <div class="value-item">
                    {{ item.value }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.grid-container {
    display: flex;
    flex-direction: row;
    justify-content: end;

    .title-container {
        h1 {
            color: rgba(0, 0, 0, 0.80);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        h2 {
            color: rgba(0, 0, 0, 0.80);
            font-size: 28px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
        }
    }

    .grid-params {
        display: grid;
        grid-template-rows: repeat(10, minmax(12vh, auto));
        /* Duas linhas */
        grid-template-columns: repeat(5, minmax(11vw, 1fr));
        gap: 10px;

        .grid-item {
            width: max(168px);
           border-radius: 1rem;
           padding: 1rem 1rem .4rem 1rem;
           display: flex;
           flex-direction: column;
           justify-content: space-between;

           .title-item {
            font-size: 14px;
            text-wrap: wrap;
            font-weight: 500;
           }

           .value-item {
            font-size: 24px;
            font-weight: 900;
           }


        }

        .grid-item:nth-child(even) {
            background-color: #FF820020;
        }

        .grid-item:nth-child(odd) {
            background-color: #FF8200;
        }
    }

    .grid-item:first-child {
        grid-column: span 1;
        grid-row: span 2;
        font-weight: 900;
        padding: 1rem 1rem 0 1rem;

        .title-item {
            font-size: 22px;
        }

        .value-item {
            font-size: 42px;
        }
    }

    /* Seleciona cada item da primeira coluna (1, 5, 9, etc.) */
    .grid-params .grid-item:nth-child(3n+1) {
        background-color: #FF8200;
        color: #ffffff;
    }

    /* Seleciona cada item da segunda coluna (2, 6, 10, etc.) */
    .grid-params .grid-item:nth-child(3n+2) {
        background-color: #FF820020;
        color: #444444;
    }

    /* Seleciona cada item da terceira coluna (3, 7, 11, etc.) */
    .grid-params .grid-item:nth-child(3n+3) {
        background-color: #FF8200;
        color: #ffffff;
    }

    /* Seleciona cada item da quarta coluna (4, 8, 12, etc.) */
    .grid-params .grid-item:nth-child(3n+4) {
        background-color: #FF8200;
        color: #ffffff;
    }
}
</style>