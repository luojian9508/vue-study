<template>
  <div class="all">
    <h1 class="head">注册</h1>

    <div class="form">
      <el-form ref="formData" :model="formData" :rules="formRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="formData.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordConfirm">
          <el-input placeholder="请输入密码" v-model="formData.passwordConfirm" show-password></el-input>
        </el-form-item>

        <el-button type="primary" @click="submit('formData')" class="registerButton">注册</el-button>
        <div class="loginLink">
          <router-link :to="{name: 'UserLogin'}">返回登录页面</router-link>
        </div>

      </el-form>
    </div>

  </div>
</template>

<script>
import {register} from '@/api/user/user'
export default {
  name: 'index',
  data () {
    return {
      formData: {
        username: '',
        password: '',
        passwordConfirm: ''
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 10, message: '长度在 2 到 10 个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符之间', trigger: 'blur'}
        ],
        passwordConfirm: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符之间', trigger: 'blur'},
          {
            validator: (rule, value, callback) => {
              if (value !== this.formData.password) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }
        if (this.GLOBAL.UseBackend) {
          register({
            username: this.formData.username,
            password: this.formData.password
          }).then(response => {
            if (response.success) {
              sessionStorage.setItem('username', this.formData.username)
              this.$router.push('/index')
            }
          }).catch(error => {
            console.log('catch:', error)
          })
        } else {
          sessionStorage.setItem('username', this.formData.username)
          this.$router.push('/index')
        }
      })
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

  .registerButton {
    width: 40%;
  }

  .loginLink {
    margin-top: 20px;
  }

</style>
