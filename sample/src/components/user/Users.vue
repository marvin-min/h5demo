<template>
  <div class="user-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <div v-for="(item, index) in userList" :key="index">{{item.email}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      userList: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    async getUserList() {
      const { data: userList } = await this.$http.get('users')
      this.userList = userList
    }
  },
  created() {
    this.getUserList()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.user-list {
  .el-card {
    margin-top: 20px;
  }
}
</style>
