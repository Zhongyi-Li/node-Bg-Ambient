<!--  -->
<template>
  <div class="about">
    <h1>{{id ? '编辑分类' : '新建分类'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { saveData, searchEditData, editData } from "../api/request";
export default {
  name: "order",
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        name: "",
      },
    };
  },
  methods: {
    async save() {
      if (this.id) {
        //如果路由id存在 那么就是编辑
        editData(this.id, this.model);
        this.$message({
          type: "success",
          message: "编辑成功",
        });
      } else {
        //不存在就是新建
        let data = this.model;
        await saveData(data);
        this.$router.push("/orderList");
        this.$message({
          type: "success",
          message: "保存成功",
        });
      }
    },
    async search() {
      const { data } = await searchEditData(this.id);
      this.model.name = data.name;
      console.log(data, this.id);

      // this.model = data;
    },
  },
  created() {
    this.id && this.search();
  },
};
</script>
<style lang="scss" scoped></style>
