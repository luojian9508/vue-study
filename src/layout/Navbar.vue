<template>
  <div class="nav">
    <i class="el-icon-user-solid icon-style"></i>
    <el-dropdown class="dropdown-style">
      <span class="el-dropdown-link">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><router-link :to="{name: 'UserInfo'}" class="dropdown-item-style">个人信息</router-link></el-dropdown-item>
        <el-dropdown-item divided><router-link :to="{name: 'Login'}" class="dropdown-item-style">退出登录</router-link></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      username: sessionStorage.getItem('username')
    }
  }
}
</script>

<style scoped>
  .nav {
    text-align: right;
    color: black;
  }
  .icon-style {
    color: dodgerblue;
  }
  .dropdown-style {
    font-size: 20px;
  }
  .dropdown-item-style {
    text-decoration: none;
    color: black;
  }

</style>
