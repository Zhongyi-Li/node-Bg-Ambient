<!--  -->
<template>
  <div>
    <h1>商品分类</h1>
    <el-table :data="items">
      <el-table-column prop="name" label="ID" width="220"></el-table-column>
      <el-table-column prop="_id" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/order/${scope.row._id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { orderList } from "../api/request";
export default {
  name: "orderList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getList() {
      const { data } = await orderList();
      this.items = data;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped></style>
