<template>
  <div class="side">
    <el-menu class="side">

      <router-link :to="{name: 'Home'}" class="router-link">
        <el-menu-item index="1">
          <i class="el-icon-platform-eleme icon-style"></i>
          <span>主页</span>
        </el-menu-item>
      </router-link>

      <router-link :to="{name: 'Module1'}" class="router-link">
        <el-menu-item index="2">
          <i class="el-icon-platform-eleme icon-style"></i>
          <span>模块一</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="3">
        <span slot="title"><i class="el-icon-platform-eleme icon-style"></i>模块二</span>

        <router-link :to="{name: 'Module2Home'}" class="router-link">
          <el-menu-item index="3-1">
            <i class="el-icon-platform-eleme icon-style"></i>
            <span>模块二首页</span>
          </el-menu-item>
        </router-link>

        <router-link :to="{name: 'Module2_1'}" class="router-link">
          <el-menu-item index="3-2">
            <i class="el-icon-platform-eleme icon-style"></i>
            <span>模块二的子模块1</span>
          </el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="4">
        <span slot="title"><i class="el-icon-setting"></i>扩展示例</span>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">选项4</span>
          <el-menu-item index="4-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .side {
    height: 100%;
    width: 200px;
    position: fixed;
  }
  .router-link {
    text-decoration: none;
    color: black;
  }
  .icon-style {
    color: dodgerblue;
  }
</style>
