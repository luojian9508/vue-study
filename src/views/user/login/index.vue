<template>
  <div class="all">
    <h1 class="head">登录</h1>

    <div class="form">
      <el-form ref="formData" :model="formData" :rules="formRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="formData.password" show-password></el-input>
        </el-form-item>
        <el-button type="primary" @click="login('formData')">登录</el-button>
        <el-button @click="goRegisterPage()">注册</el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 3 到 10 个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符之间', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    goRegisterPage () {
      this.$router.push('/user/register')
    }
  }

}
</script>

<style scoped>
  .all {
    height: 100%;
    width: 100%;
    text-align: center;
    position: fixed;
    overflow: scroll;
  }

  .head {
    text-align: center;
    margin-top: 5%;
  }

  .form {
    height: 50%;
    width: 50%;
    margin: 0 auto;
  }
</style>
