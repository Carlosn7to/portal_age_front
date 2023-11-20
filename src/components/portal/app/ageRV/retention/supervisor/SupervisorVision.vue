<script setup>
import { ref, computed } from "vue";
import SelectComponent from "@/components/portal/app/_fragments/select/SelectComponent.vue"

const columns = ref([
  { title: "Colaborador", field: "collaborator" },
  { title: "Gráfico", field: "graphic" },
  { title: "Porcentagem", field: "percentage" },
  { title: "Ligações Produtivas Recebidas", field: "requests" },
  { title: "Solicitações Realizadas", field: "done" },
  { title: "Dinâmica", field: "dynamic" },
  { title: "Comissão", field: "commission" }
]);

const data = ref([
  {
    collaborator: "Nome do 1 Colaborador",
    graphic: 35,
    percentage: 34,
    requests: 990,
    done: 1139,
    commission: 289,
    dynamic: 223
  },
  {
    collaborator: "Nome do 2 Colaborador",
    graphic: 27,
    percentage: 50,
    requests: 786,
    done: 84,
    commission: 1051,
    dynamic: -120
  },
  {
    collaborator: "Nome do 3 Colaborador",
    graphic: 82,
    percentage: 14,
    requests: 722,
    done: 615,
    commission: 1044,
    dynamic: -43
  },
  {
    collaborator: "Nome do 4 Colaborador",
    graphic: 30,
    percentage: 3,
    requests: 1042,
    done: 1292,
    commission: 1234,
    dynamic: -892
  },
  {
    collaborator: "Nome do 5 Colaborador",
    graphic: 95,
    percentage: 81,
    requests: 680,
    done: 123,
    commission: 428,
    dynamic: -182
  },
  {
    collaborator: "Nome do 6 Colaborador",
    graphic: 58,
    percentage: 75,
    requests: 784,
    done: 1357,
    commission: 1027,
    dynamic: 917
  },
  {
    collaborator: "Nome do 7 Colaborador",
    graphic: 44,
    percentage: 43,
    requests: 1469,
    done: 839,
    commission: 444,
    dynamic: 716
  },
  {
    collaborator: "Nome do 8 Colaborador",
    graphic: 6,
    percentage: 45,
    requests: 997,
    done: 231,
    commission: 565,
    dynamic: 956
  },
  {
    collaborator: "Nome do 9 Colaborador",
    graphic: 37,
    percentage: 78,
    requests: 1408,
    done: 1375,
    commission: 467,
    dynamic: 473
  },
  {
    collaborator: "Nome do 10 Colaborador",
    graphic: 59,
    percentage: 16,
    requests: 909,
    done: 666,
    commission: 1027,
    dynamic: 751
  },
  {
    collaborator: "Nome do 11 Colaborador",
    graphic: 15,
    percentage: 10,
    requests: 1162,
    done: 826,
    commission: 1151,
    dynamic: -947
  },
  {
    collaborator: "Nome do 12 Colaborador",
    graphic: 45,
    percentage: 100,
    requests: 1106,
    done: 691,
    commission: 1195,
    dynamic: -185
  },
  {
    collaborator: "Nome do 13 Colaborador",
    graphic: 31,
    percentage: 59,
    requests: 516,
    done: 855,
    commission: 799,
    dynamic: -496
  },
  {
    collaborator: "Nome do 14 Colaborador",
    graphic: 6,
    percentage: 22,
    requests: 663,
    done: 561,
    commission: 1256,
    dynamic: 567
  },
  {
    collaborator: "Nome do 15 Colaborador",
    graphic: 92,
    percentage: 49,
    requests: 1119,
    done: 735,
    commission: 1130,
    dynamic: 4
  },
  {
    collaborator: "Nome do 16 Colaborador",
    graphic: 98,
    percentage: 21,
    requests: 806,
    done: 1428,
    commission: 723,
    dynamic: 646
  },
  {
    collaborator: "Nome do 17 Colaborador",
    graphic: 89,
    percentage: 0,
    requests: 994,
    done: 1051,
    commission: 1005,
    dynamic: -788
  },
  {
    collaborator: "Nome do 18 Colaborador",
    graphic: 86,
    percentage: 89,
    requests: 1355,
    done: 1410,
    commission: 552,
    dynamic: -772
  },
  {
    collaborator: "Nome do 19 Colaborador",
    graphic: 98,
    percentage: 9,
    requests: 783,
    done: 721,
    commission: 1177,
    dynamic: -716
  },
  {
    collaborator: "Nome do 20 Colaborador",
    graphic: 56,
    percentage: 95,
    requests: 506,
    done: 1331,
    commission: 765,
    dynamic: -999
  },
  {
    collaborator: "Nome do 21 Colaborador",
    graphic: 88,
    percentage: 21,
    requests: 1422,
    done: 363,
    commission: 1490,
    dynamic: 860
  },
  {
    collaborator: "Nome do 22 Colaborador",
    graphic: 77,
    percentage: 97,
    requests: 648,
    done: 548,
    commission: 1426,
    dynamic: 736
  },
  {
    collaborator: "Nome do 23 Colaborador",
    graphic: 7,
    percentage: 50,
    requests: 1107,
    done: 63,
    commission: 831,
    dynamic: -250
  },
  {
    collaborator: "Nome do 24 Colaborador",
    graphic: 33,
    percentage: 19,
    requests: 1048,
    done: 1480,
    commission: 360,
    dynamic: 433
  },
  {
    collaborator: "Nome do 25 Colaborador",
    graphic: 92,
    percentage: 23,
    requests: 1292,
    done: 1071,
    commission: 1081,
    dynamic: -882
  },
  {
    collaborator: "Nome do 26 Colaborador",
    graphic: 26,
    percentage: 28,
    requests: 1393,
    done: 389,
    commission: 523,
    dynamic: 519
  },
  {
    collaborator: "Nome do 27 Colaborador",
    graphic: 4,
    percentage: 44,
    requests: 1377,
    done: 1409,
    commission: 1182,
    dynamic: 179
  },
  {
    collaborator: "Nome do 28 Colaborador",
    graphic: 7,
    percentage: 27,
    requests: 608,
    done: 1001,
    commission: 1344,
    dynamic: -705
  },
  {
    collaborator: "Nome do 29 Colaborador",
    graphic: 74,
    percentage: 63,
    requests: 638,
    done: 1048,
    commission: 1199,
    dynamic: 768
  },
  {
    collaborator: "Nome do 30 Colaborador",
    graphic: 84,
    percentage: 2,
    requests: 1139,
    done: 923,
    commission: 1071,
    dynamic: -594
  },
  {
    collaborator: "Nome do 31 Colaborador",
    graphic: 20,
    percentage: 29,
    requests: 714,
    done: 833,
    commission: 869,
    dynamic: -687
  },
  {
    collaborator: "Nome do 32 Colaborador",
    graphic: 57,
    percentage: 34,
    requests: 1434,
    done: 732,
    commission: 194,
    dynamic: 306
  },
  {
    collaborator: "Nome do 33 Colaborador",
    graphic: 88,
    percentage: 35,
    requests: 607,
    done: 647,
    commission: 69,
    dynamic: -27
  },
  {
    collaborator: "Nome do 34 Colaborador",
    graphic: 58,
    percentage: 79,
    requests: 1467,
    done: 1444,
    commission: 105,
    dynamic: -232
  },
  {
    collaborator: "Nome do 35 Colaborador",
    graphic: 73,
    percentage: 98,
    requests: 1377,
    done: 274,
    commission: 536,
    dynamic: -540
  },
  {
    collaborator: "Nome do 36 Colaborador",
    graphic: 92,
    percentage: 7,
    requests: 1018,
    done: 1295,
    commission: 440,
    dynamic: 667
  },
  {
    collaborator: "Nome do 37 Colaborador",
    graphic: 25,
    percentage: 16,
    requests: 1364,
    done: 47,
    commission: 81,
    dynamic: -8
  },
  {
    collaborator: "Nome do 38 Colaborador",
    graphic: 0,
    percentage: 72,
    requests: 877,
    done: 1492,
    commission: 1359,
    dynamic: -938
  },
  {
    collaborator: "Nome do 39 Colaborador",
    graphic: 75,
    percentage: 41,
    requests: 1427,
    done: 1383,
    commission: 1376,
    dynamic: 66
  },
  {
    collaborator: "Nome do 40 Colaborador",
    graphic: 85,
    percentage: 52,
    requests: 695,
    done: 75,
    commission: 602,
    dynamic: 494
  },
  {
    collaborator: "Nome do 41 Colaborador",
    graphic: 16,
    percentage: 21,
    requests: 755,
    done: 737,
    commission: 489,
    dynamic: -626
  },
  {
    collaborator: "Nome do 42 Colaborador",
    graphic: 25,
    percentage: 95,
    requests: 1089,
    done: 997,
    commission: 236,
    dynamic: -611
  },
  {
    collaborator: "Nome do 43 Colaborador",
    graphic: 15,
    percentage: 3,
    requests: 1315,
    done: 803,
    commission: 301,
    dynamic: -790
  },
  {
    collaborator: "Nome do 44 Colaborador",
    graphic: 58,
    percentage: 10,
    requests: 1343,
    done: 937,
    commission: 1019,
    dynamic: -503
  },
  {
    collaborator: "Nome do 45 Colaborador",
    graphic: 23,
    percentage: 9,
    requests: 669,
    done: 1134,
    commission: 513,
    dynamic: 996
  },
  {
    collaborator: "Nome do 46 Colaborador",
    graphic: 97,
    percentage: 52,
    requests: 840,
    done: 1476,
    commission: 4,
    dynamic: 675
  },
  {
    collaborator: "Nome do 47 Colaborador",
    graphic: 56,
    percentage: 90,
    requests: 1290,
    done: 684,
    commission: 229,
    dynamic: 424
  },
  {
    collaborator: "Nome do 48 Colaborador",
    graphic: 81,
    percentage: 75,
    requests: 1380,
    done: 1255,
    commission: 1036,
    dynamic: -793
  },
  {
    collaborator: "Nome do 49 Colaborador",
    graphic: 79,
    percentage: 83,
    requests: 812,
    done: 227,
    commission: 894,
    dynamic: -45
  },
  {
    collaborator: "Nome do 50 Colaborador",
    graphic: 39,
    percentage: 63,
    requests: 825,
    done: 536,
    commission: 1075,
    dynamic: -68
  },
  {
    collaborator: "Nome do 51 Colaborador",
    graphic: 85,
    percentage: 46,
    requests: 1160,
    done: 874,
    commission: 1116,
    dynamic: -930
  },
  {
    collaborator: "Nome do 52 Colaborador",
    graphic: 94,
    percentage: 62,
    requests: 944,
    done: 56,
    commission: 728,
    dynamic: 466
  },
  {
    collaborator: "Nome do 53 Colaborador",
    graphic: 19,
    percentage: 49,
    requests: 539,
    done: 279,
    commission: 1062,
    dynamic: 827
  },
  {
    collaborator: "Nome do 54 Colaborador",
    graphic: 79,
    percentage: 16,
    requests: 1090,
    done: 620,
    commission: 157,
    dynamic: 354
  },
  {
    collaborator: "Nome do 55 Colaborador",
    graphic: 31,
    percentage: 95,
    requests: 802,
    done: 958,
    commission: 1347,
    dynamic: 904
  },
  {
    collaborator: "Nome do 56 Colaborador",
    graphic: 87,
    percentage: 83,
    requests: 1354,
    done: 1120,
    commission: 1039,
    dynamic: -908
  },
  {
    collaborator: "Nome do 57 Colaborador",
    graphic: 53,
    percentage: 32,
    requests: 591,
    done: 1097,
    commission: 1288,
    dynamic: 118
  },
  {
    collaborator: "Nome do 58 Colaborador",
    graphic: 37,
    percentage: 93,
    requests: 1000,
    done: 306,
    commission: 13,
    dynamic: -230
  },
  {
    collaborator: "Nome do 59 Colaborador",
    graphic: 62,
    percentage: 14,
    requests: 916,
    done: 1466,
    commission: 1435,
    dynamic: 701
  },
  {
    collaborator: "Nome do 60 Colaborador",
    graphic: 75,
    percentage: 7,
    requests: 1168,
    done: 527,
    commission: 1245,
    dynamic: 564
  },
  {
    collaborator: "Nome do 61 Colaborador",
    graphic: 95,
    percentage: 30,
    requests: 1476,
    done: 568,
    commission: 720,
    dynamic: 74
  },
  {
    collaborator: "Nome do 62 Colaborador",
    graphic: 72,
    percentage: 86,
    requests: 1458,
    done: 926,
    commission: 1278,
    dynamic: -352
  },
  {
    collaborator: "Nome do 63 Colaborador",
    graphic: 42,
    percentage: 62,
    requests: 784,
    done: 721,
    commission: 164,
    dynamic: -875
  },
  {
    collaborator: "Nome do 64 Colaborador",
    graphic: 28,
    percentage: 87,
    requests: 876,
    done: 719,
    commission: 425,
    dynamic: -153
  },
  {
    collaborator: "Nome do 65 Colaborador",
    graphic: 8,
    percentage: 37,
    requests: 893,
    done: 278,
    commission: 1256,
    dynamic: 239
  },
  {
    collaborator: "Nome do 66 Colaborador",
    graphic: 60,
    percentage: 2,
    requests: 905,
    done: 566,
    commission: 544,
    dynamic: -224
  },
  {
    collaborator: "Nome do 67 Colaborador",
    graphic: 3,
    percentage: 83,
    requests: 505,
    done: 702,
    commission: 741,
    dynamic: -715
  },
  {
    collaborator: "Nome do 68 Colaborador",
    graphic: 45,
    percentage: 65,
    requests: 611,
    done: 278,
    commission: 731,
    dynamic: 463
  },
  {
    collaborator: "Nome do 69 Colaborador",
    graphic: 11,
    percentage: 66,
    requests: 1482,
    done: 941,
    commission: 196,
    dynamic: -647
  },
  {
    collaborator: "Nome do 70 Colaborador",
    graphic: 81,
    percentage: 32,
    requests: 576,
    done: 1221,
    commission: 1470,
    dynamic: -989
  },
  {
    collaborator: "Nome do 71 Colaborador",
    graphic: 52,
    percentage: 3,
    requests: 1495,
    done: 648,
    commission: 343,
    dynamic: -546
  },
  {
    collaborator: "Nome do 72 Colaborador",
    graphic: 45,
    percentage: 91,
    requests: 994,
    done: 1487,
    commission: 1093,
    dynamic: 864
  },
  {
    collaborator: "Nome do 73 Colaborador",
    graphic: 91,
    percentage: 59,
    requests: 1497,
    done: 68,
    commission: 1381,
    dynamic: -250
  },
  {
    collaborator: "Nome do 74 Colaborador",
    graphic: 2,
    percentage: 73,
    requests: 1241,
    done: 1238,
    commission: 1062,
    dynamic: -465
  },
  {
    collaborator: "Nome do 75 Colaborador",
    graphic: 4,
    percentage: 12,
    requests: 887,
    done: 1482,
    commission: 626,
    dynamic: -194
  },
  {
    collaborator: "Nome do 76 Colaborador",
    graphic: 21,
    percentage: 3,
    requests: 1177,
    done: 85,
    commission: 189,
    dynamic: 664
  },
  {
    collaborator: "Nome do 77 Colaborador",
    graphic: 77,
    percentage: 46,
    requests: 1250,
    done: 833,
    commission: 1070,
    dynamic: -295
  },
  {
    collaborator: "Nome do 78 Colaborador",
    graphic: 26,
    percentage: 6,
    requests: 1177,
    done: 568,
    commission: 1233,
    dynamic: -36
  },
  {
    collaborator: "Nome do 79 Colaborador",
    graphic: 53,
    percentage: 43,
    requests: 849,
    done: 1328,
    commission: 901,
    dynamic: -242
  },
  {
    collaborator: "Nome do 80 Colaborador",
    graphic: 37,
    percentage: 12,
    requests: 519,
    done: 1482,
    commission: 266,
    dynamic: 336
  },
  {
    collaborator: "Nome do 81 Colaborador",
    graphic: 1,
    percentage: 12,
    requests: 754,
    done: 425,
    commission: 15,
    dynamic: -202
  },
  {
    collaborator: "Nome do 82 Colaborador",
    graphic: 77,
    percentage: 65,
    requests: 514,
    done: 108,
    commission: 513,
    dynamic: -852
  },
  {
    collaborator: "Nome do 83 Colaborador",
    graphic: 92,
    percentage: 98,
    requests: 1431,
    done: 1391,
    commission: 327,
    dynamic: -934
  },
  {
    collaborator: "Nome do 84 Colaborador",
    graphic: 6,
    percentage: 47,
    requests: 616,
    done: 1357,
    commission: 1255,
    dynamic: 674
  },
  {
    collaborator: "Nome do 85 Colaborador",
    graphic: 38,
    percentage: 93,
    requests: 1454,
    done: 1141,
    commission: 620,
    dynamic: -568
  },
  {
    collaborator: "Nome do 86 Colaborador",
    graphic: 79,
    percentage: 18,
    requests: 553,
    done: 1054,
    commission: 905,
    dynamic: -158
  },
  {
    collaborator: "Nome do 87 Colaborador",
    graphic: 85,
    percentage: 36,
    requests: 1124,
    done: 1323,
    commission: 1109,
    dynamic: 410
  },
  {
    collaborator: "Nome do 88 Colaborador",
    graphic: 54,
    percentage: 81,
    requests: 974,
    done: 150,
    commission: 429,
    dynamic: -46
  },
  {
    collaborator: "Nome do 89 Colaborador",
    graphic: 38,
    percentage: 33,
    requests: 557,
    done: 1235,
    commission: 679,
    dynamic: 60
  },
  {
    collaborator: "Nome do 90 Colaborador",
    graphic: 73,
    percentage: 72,
    requests: 1397,
    done: 528,
    commission: 54,
    dynamic: -58
  },
  {
    collaborator: "Nome do 91 Colaborador",
    graphic: 37,
    percentage: 62,
    requests: 1322,
    done: 1144,
    commission: 1231,
    dynamic: 593
  },
  {
    collaborator: "Nome do 92 Colaborador",
    graphic: 50,
    percentage: 87,
    requests: 1342,
    done: 227,
    commission: 657,
    dynamic: -524
  },
  {
    collaborator: "Nome do 93 Colaborador",
    graphic: 82,
    percentage: 21,
    requests: 563,
    done: 1071,
    commission: 748,
    dynamic: 808
  },
  {
    collaborator: "Nome do 94 Colaborador",
    graphic: 77,
    percentage: 81,
    requests: 1174,
    done: 1033,
    commission: 810,
    dynamic: -565
  },
  {
    collaborator: "Nome do 95 Colaborador",
    graphic: 56,
    percentage: 70,
    requests: 890,
    done: 40,
    commission: 1426,
    dynamic: 85
  },
  {
    collaborator: "Nome do 96 Colaborador",
    graphic: 61,
    percentage: 68,
    requests: 1090,
    done: 260,
    commission: 699,
    dynamic: -460
  },
  {
    collaborator: "Nome do 97 Colaborador",
    graphic: 70,
    percentage: 53,
    requests: 554,
    done: 287,
    commission: 377,
    dynamic: -623
  },
  {
    collaborator: "Nome do 98 Colaborador",
    graphic: 30,
    percentage: 13,
    requests: 916,
    done: 6,
    commission: 692,
    dynamic: 466
  },
  {
    collaborator: "Nome do 99 Colaborador",
    graphic: 11,
    percentage: 100,
    requests: 727,
    done: 1486,
    commission: 614,
    dynamic: 415
  },
  {
    collaborator: "Nome do 100 Colaborador",
    graphic: 91,
    percentage: 87,
    requests: 509,
    done: 710,
    commission: 351,
    dynamic: -103
  }
]);

const options = ref([
  {
    name: 'Janeiro',
    value: 1,
  },
  {
    name: 'Fevereiro',
    value: 2,
  },
  {
    name: 'Março',
    value: 3,
  },
])

function formatCurrency(value) {
  // Formata o número como moeda, incluindo o separador de milhar
  return `R$${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

const sortColumn = ref(null);
const sortOrder = ref(null);

function sortData(column) {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = column;
    sortOrder.value = "asc";
  }

  data.value.sort((a, b) => {
    if (a[column] < b[column]) return sortOrder.value === "asc" ? -1 : 1;
    if (a[column] > b[column]) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
}

const currentPage = ref(1);
const itemsPerPage = ref(11);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return data.value.slice(start, end);
});

const pageCount = computed(() => {
  return Math.ceil(data.value.length / itemsPerPage.value);
});

function nextPage() {
  if (currentPage.value < pageCount.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

const getSvgColor = index => {
  // '#FF0000' para a página atual, '#00FF00' para outras páginas
  return currentPage.value === index ? "#FB7411" : "#E0E0E0";
};

const setCurrentPage = index => {
  currentPage.value = index;
};

const dynamicStyle = dynamicValue => {
  return {
    color: dynamicValue < 0 ? "#E10000" : "#00943B"
  };
};
</script>

<template>
  <div class="grid-container">
    <div class="table-container">
      <div class="table-title-row">
        <h2 class="table-title">Painel de Supervisão (Rentenção)</h2>
        <SelectComponent :options="options"/>
      </div>
      <div class="content-container">
        <table>
          <thead>
            <tr>
              <th
                v-for="column in columns"
                :key="column.field"
                class="column-title"
                @click="sortData(column.field)"
              >{{ column.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedData" :key="item.collaborator">
              <td
                :style="{animationDelay : item * .1+'s'}"
                v-for="column in columns"
                :key="column.field"
                class="column-items"
              >
                <div
                  v-if="column.field === 'collaborator'"
                  class="collaborator-field"
                >{{ item.collaborator }}</div>
                <div v-else-if="column.field === 'graphic'" class="progress-bar-container">
                  <div class="progress-bar" :style="{ width: item.graphic + '%' }"></div>
                </div>
                <div v-else-if="column.field === 'commission'">{{ formatCurrency(item.commission) }}</div>
                <div
                  v-else-if="column.field === 'dynamic'"
                  :style="dynamicStyle(item.dynamic)"
                >{{ formatCurrency(item.dynamic) }}</div>
                <div v-else-if="column.field === 'percentage'">{{ item.percentage }}%</div>
                <div v-else>{{ item[column.field] }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination Controls -->
      <div class="pagination-controls">
        <div @click="prevPage" :class="{ disabled: currentPage <= 1 }">
          <svg
            v-if="currentPage > 1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            class="pagination-buttons"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
          <svg
            class="pagination-buttons"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </div>
        <div>
          <svg
            v-for="index in pageCount"
            :key="index"
            :style="{ fill: getSvgColor(index) }"
            class="pagination-indicator"
            @click="setCurrentPage(index)"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
          </svg>
        </div>
        <div @click="nextPage" :class="{ disabled: currentPage >= pageCount }">
          <svg
            class="pagination-buttons"
            v-if="currentPage < pageCount"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="pagination-buttons"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Definição de cores e outras variáveis para reutilização
$background-color: #f5f7fb;
$table-background: #ffffff;
$border-color: #5f687a50;
$font-color: #00000060;
$hover-font-color: #00000090;
$progress-bar-background: #e0e0e0;
$progress-bar-color: linear-gradient(90deg, #ffb600 -0.88%, #f93822 235.67%);
$title-font-size: 2.4rem;
$paragraph-font-size: 1.6rem;
$font-color-dark: rgba(0, 0, 0, 0.7);
$font-color-medium: rgba(0, 0, 0, 0.5);
$background-light: #d9d9d950;
$input-border: 0.5px solid #d9d9d9;
$button-gradient: linear-gradient(90deg, #ffb600 -0.88%, #f93822 235.67%);

// Mixin para flex container
@mixin flex-container($direction: row, $justify: center, $align: left) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

.grid-container {
  display: grid;
  place-items: start;
  width: 95vw;
  padding: 1vh;
  background-color: $background-color;
}

.table-container {
  @include flex-container(column, space-between); // Mixin para flex container
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1vw;
  background-color: $table-background;
  border: 1px solid $border-color;
  border-radius: 1rem;

  table {
    flex-grow: 1;
    border-collapse: collapse;
  }

  .column-title,
  .column-items {
    width: 1vw;
    padding: 1.5vh 0;
    font-size: 1.3rem;
    text-align: center;
    vertical-align: top;
    font-weight: 500;
    border-bottom: 1px solid $border-color;
    opacity: 0;
    animation: up-item ease-in-out forwards 0.5s;

    @keyframes up-item {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &:nth-child(1),
    &:nth-child(2) {
      text-align: left;
      width: 15%;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      text-align: center;
      width: 10%;
    }

    &.column-title {
      font-size: 1.2rem;
      padding: 0 0 1vh 0;
      color: $font-color;

      &:hover {
        color: $hover-font-color;
      }
    }
  }

  .table-title-row {
    @include flex-container(row, space-between);
    padding: 0 1vw 0 0;
  }

  .table-title {
    flex: 0 0 auto;
    text-align: left;
    font-weight: 600;
    padding: 2vh 0 4vh 0;
  }
}

.select-month {
  border: 1px solid $border-color;
  border-radius: .5rem;
  padding: 0 .5vw;
  margin: 2vh 0;
  width: 10%;
  height: 50%;
}

.content-container {
  min-height: 70vh;
}

// Mixin para flex container
@mixin flex-container($direction, $justify) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
}

.progress-bar-container {
  width: 100%;
  background-color: $progress-bar-background;
  border-radius: 4px;

  .progress-bar {
    height: 20px;
    background: $progress-bar-color;
    border-radius: 4px;
  }
}

.collaborator-field {
  width: 100%;
  font-size: 1.3rem;
  text-align: left;
  vertical-align: top;
  font-weight: 500;
}

.pagination-controls {
  @include flex-container(row, center); // Mixin para flex container
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.pagination-indicator {
  margin: 0.1vh 0.2vw;
  padding: 0.05vw;
}

.pagination-buttons {
  fill: #fb7411;
  margin: 0 0.5vw;
  height: 2vh;
}

.disabled svg {
  fill: #cccccc; /* Cor cinza para indicar que está desabilitado */
  pointer-events: none; /* Desativa a interação com o mouse */
}

</style>