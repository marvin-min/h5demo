<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.jpeg" /><span>狮子座后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #b2c0d1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    div {
      display: flex;
      align-items: center;
      img {
        height: 50px;
      }
      span {
        padding-left: 10px;
        font-weight: bold;
      }
    }
  }
  .el-aside {
    background-color: #d3dce6;
  }
  .el-footer {
    background-color: #e9eef3;
  }
}
</style>
