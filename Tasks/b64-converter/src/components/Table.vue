<template>
  <div class="tableBorder">
    <!-- <table @click="clicked"> -->
    <table>
      <col style="width: 20%" />

      <!-- Assigning width of second 
                     column of each row as 60% -->
      <col style="width: 20%" />
      <col style="width: 60%" />
      <tr>
        <th v-for="title in contents.header" :key="title">
          {{ title }}
        </th>
      </tr>
      <tr v-for="(row, index) in contents.data" :key="index">
        <td v-for="data in row" :key="data">
          {{ data }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    contents: Object,
  },
  methods: {
    clicked() {
      console.log("Click table");
      console.log(this.contents.data);
    },
  },
};
</script>

<style scoped>
.tableBorder {
  overflow-x: auto;
  margin-top: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 2px solid #e9ecef;
  table-layout: fixed;
  border-radius: 30px;
}

th,
td {
  text-align: left;
  padding: 8px;
  word-wrap: break-word;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
/* table.fixed {
  table-layout: fixed;
}
table.fixed td {
  overflow: hidden;
} */
/* td {
  width: 100%;
  overflow-x: auto;
} */
</style>
