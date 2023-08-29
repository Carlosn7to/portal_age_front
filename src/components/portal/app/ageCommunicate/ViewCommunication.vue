<script>
import CustomTable from "@/components/portal/app/_fragments/customComponents/customTable.vue";

export default {
  components: {
    CustomTable
  },
  data() {
    return {
      tableData: [
        { Identificação: "PTB-SW1", Ativo: "Switch", Descrição: "Switch HUAWEI MODELO ABC123", Situação: "Ligado", Localização: "Pátio Brasil", Redundância: "Sim", IdRedundância: "PTB-SW2" },
      ],
      tableColumns: ["Identificação", "Ativo", "Descrição", "Situação", "Localização", "Redundância", "IdRedundância"]
    };
  }
};
</script>

<template>
  <div>
    <custom-table title_table="Ativos" :data="tableData" :columns="tableColumns"></custom-table>
  </div>
</template>


