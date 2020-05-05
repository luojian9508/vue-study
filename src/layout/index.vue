<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header>
          <navbar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from '@/layout/Sidebar'
import Navbar from '@/layout/Navbar'
export default {
  name: 'index',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #b6bfd1;
    line-height: 60px;
    font-size: 20px;
  }
</style>
