<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        router
        :default-openeds="['1', '3']"
        :default-active="$route.path"
      >
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>内容管理</template
          >
          <el-menu-item-group>
            <!-- <template slot="title">分类</template> -->
            <el-menu-item index="/order">新建分类</el-menu-item>
            <el-menu-item index="/orderList">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
