<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.jpeg" />
      </div>
      <el-form ref="loginFormRef" :model="loginForm" class="login_form" :rules="loginRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="输入用户名"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "zs1",
        password: "123445"
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        console.log("login ....");
        const result = await this.$http.get("/search");
        if (result.status == 200) {
          this.$msg.success("登陆成功");
          window.sessionStorage.setItem("totals", result.data.total_results);
          this.$router.push('/home');
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login_container {
  background-color: #66cc99;
  height: 100%;
}
.login_box {
  background-color: #ffffff;
  width: 450px;
  height: 300px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ff6666dc;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>