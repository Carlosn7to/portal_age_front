<script>
export default {
    name: "gridCharge",
    props: {
        gridItens: Array,
    },
    computed: {
        gridStyle() {
            const itemsPerColumn = 2;
            const columnCount = Math.ceil(this.gridItens.length / itemsPerColumn);
            return {
                display: 'grid',
                gridTemplateRows: 'repeat(2, minmax(12vh, auto))',
                gridTemplateColumns: `repeat(${columnCount}, minmax(9vw, 1fr))`,
                gap: '10px',
            };
        },
    },
}
</script>

<template>
    <div class="grid-container">

        <div class="grid-params" :style="gridStyle">
            <div class="grid-item" v-for="(item, index) in gridItens" :key="index">
                <div class="title-item">
                    {{ item.title }}
                </div>
                <div class="value-item">
                    {{ item.value }}
                </div>
            </div>
        </div>

        <div>
            <span>
                {{ mostrarTotal }}
            </span>
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

        .grid-item {
            width: max(168px);
            border-radius: 1rem;
            padding: 1rem 1rem .4rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            transition: transform 0.3s ease;

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

        .grid-item:hover {
            transform: scale(1.1);
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

    .grid-item:last-child {
        color: red;
     }

    .grid-params .grid-item:nth-child(3n+1) {
        background-color: #FF8200;
        color: #ffffff;
    }

    .grid-params .grid-item:nth-child(3n+2) {
        background-color: #FF820020;
        color: #444444;
    }

    .grid-params .grid-item:nth-child(3n+3) {
        background-color: #FF8200;
        color: #ffffff;
    }

    .grid-params .grid-item:nth-child(3n+4) {
        background-color: #FF8200;
        color: #ffffff;
    }
}
</style>