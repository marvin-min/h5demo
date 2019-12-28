<template>
  <div class="home">
    <el-button type="info" @click="logout">退出登录</el-button>
  </div>
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
.home {
}
</style>
