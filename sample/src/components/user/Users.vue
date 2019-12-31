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
        <el-table-column type="index" width="50" label="#"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="电话号码"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="updateStatus(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" content="修改" placement="top" :enterable="false">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="edit(scope.row.id)"
                size="mini"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" content="分配角色" placement="top" :enterable="false">
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
                size="mini"
                @click="assignRoles(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" content="删除用户" placement="top" :enterable="false">
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="mini"
                @click="deleteUser(scope.row.id)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      userList: [],
      queryInfo: { query: '', pageNum: 10, pageSize: 10 },
      totals: 0
    }
  },
  methods: {
    async updateStatus(row) {
      try {
        const resp = await this.$http.put('users/' + row.id, {
          status: row.status
        })
        if (resp && resp.data && resp.data.code == 200) {
          this.$msg.success(resp.data.msg)
        } else {
          this.$msg.error(resp.data.msg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    handleSizeChange(size) {
      this.queryInfo.pageSize = size
      this.getUserList()
    },
    handleCurrentChange(current) {
      this.queryInfo.pageNum = current
      this.getUserList()
    },
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      this.userList = res.results
      this.queryInfo.pageNum = res.pagination.current_page
      this.totals = res.pagination.totals
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
  .el-pagination {
    margin-top: 15px;
  }
}
</style>
