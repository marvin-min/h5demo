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
      <el-table :data="userList" :border="true">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="电话号码"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="changeStatus(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table>
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
  methods: {
    changeStatus(row) {
      console.log(row)
    },
    async getUserList() {
      const { data: userList } = await this.$http.get('users')
      this.userList = userList
    }
  },
  created() {
    this.getUserList()
  }
}
</script>
<style lang="scss" scoped>
.user-list {
  .el-card {
    margin-top: 20px;
  }
  .el-table {
    margin-top: 20px;
  }
}
</style>
