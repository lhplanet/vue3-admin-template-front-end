<template>
  <div class="login_container">
    <el-row>
      <!-- :xs 表示屏幕宽度小于 768px 时的栅格占据的列数 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到零号星球</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" v-model="loginForm.password" placeholder="请输入密码" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';

// 收集账号和密码的数据
let loginForm = reactive({
  username: 'admin',
  password: '111111'
});

</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 60%;
    top: 30vh;
    background-color: rgba($color: #5d93e1, $alpha: 0.5);
    // background: url('@/assets/images/login_form.png') no-repeat;
    // background-size: cover;
    padding: 40px;
    margin-left: 100px;
    border-radius: 10px;
    h1 {
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>