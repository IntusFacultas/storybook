<template>
  <n-table :flavor="flavor" :striped="striped">
    <n-thead>
      <slot name="header">
        Table headers go here. If you are using NTr and NTh, here are the props you'll want to pass to each
        <br />
        <br />
        <b>n-th</b>
        <ul>
          <li>:flavor="flavor": For setting the background flavor of the th (in case you want it to be different to the table flavor)</li>
          <li>:condensed="condensed": For setting condensed</li>
          <li>:bordered="bordered": For making the cell fully bordered</li>
          <li>:text-align="textAlign": For setting the text align of the cell</li>
          <li>:sortable="sortable": for setting the css for a sortable column header</li>
        </ul>
        <br />
        <br />If you want to half the animated carat that the VueTable component uses, use the TableCarat component and be sure to pass the following props:
        <br />
        <ul>
          <li>:flavor="flavor": For setting the color</li>
          <li>:class="currentlySelectedSort ? '': Descending ? 'table-open-carat' : 'table-not-shown'"</li>
        </ul>
      </slot>
    </n-thead>
    <n-tbody>
      <slot name="body">
        Table rows go here. If you're using NTr and NTd, here are the props you'll want to pass to each:
        <br />
        <br />
        <b>n-tr:</b>
        <ul>
          <li>:class="{'table-hoverable-row': hover}": If you want the row to be hoverable</li>
        </ul>
        <br />
        <br />
        <b>n-td:</b>
        <ul>
          <li>:flavor="flavor": For setting border flavors</li>
          <li>:condensed="condensed": For setting condensed</li>
          <li>:bordered="bordered": For making the cell fully bordered</li>
          <li>:text-align="textAlign": For setting the text align of the cell</li>
        </ul>
      </slot>
    </n-tbody>
  </n-table>
</template>

<script>
import { NTable, NThead, NTbody } from "@intus/table";

export const VueRawTable = {
  components: { NTable, NThead, NTbody },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    striped: {
      type: Boolean,
      default: false
    }
  }
};
export default VueRawTable;
</script>

<style>
</style>