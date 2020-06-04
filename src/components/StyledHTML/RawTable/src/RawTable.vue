<template>
  <n-table :flavor="flavor" :striped="striped">
    <table-headers>
      <slot name="header"> </slot>
    </table-headers>
    <table-body>
      <slot name="body"> </slot>
    </table-body>
  </n-table>
</template>

<script>
import { NTable, TableHeaders, TableBody } from "@IntusFacultas/table";

export const VueRawTable = {
  components: { NTable, TableHeaders, TableBody },
  props: {
    flavor: {
      type: String,
      default: "",
    },
    striped: {
      type: Boolean,
      default: false,
    },
  },
};
export default VueRawTable;
</script>

<style>
.table-not-shown {
  opacity: 0;
  transform: rotate(45deg) !important;
}
.table-hoverable-row:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-open-carat {
  transform: rotate(135deg) !important;
}
</style>
