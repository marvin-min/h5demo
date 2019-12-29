<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.jpeg" /><span>狮子座后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="collapseMenu">|||</div>
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#d3dce6"
          text-color="#000"
          :unique-opened="true"
          :collapse="isCollapse"
          active-text-color="green"
          :collapse-transition="false"
          :router="true"
        >
          <!-- 一级菜单-->
          <el-submenu
            :index="menu.path"
            v-for="(menu, index) in menuList"
            :key="index + menu.path"
          >
            <template slot="title">
              <i :class="menu.icon"></i>
              <span v-text="menu.title"></span>
            </template>
            <el-menu-item
              v-for="(subMenu, subIndex) in menu.children"
              :key="subMenu.path + subIndex"
              :index="subMenu.path"
              @click="saveNavState(subMenu.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subMenu.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  props: {},
  created() {
    this.getMenuList()
    const currentPath = window.sessionStorage.getItem('activePath')
    if (currentPath != 'null') {
      this.activePath = currentPath
    }
    console.log(this.activePath)
  },
  data() {
    return { menuList: [], isCollapse: false, activePath: 'roles' }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getMenuList() {
      console.log('init menu')
      this.menuList = [
        {
          title: '用户管理',
          id: 1,
          icon: 'el-icon-user',
          path: '',
          children: [{ title: '用户列表', id: 1001, path: 'users' }]
        },
        {
          title: '权限管理',
          id: 2,
          path: 'permission',
          icon: 'el-icon-lock',
          children: [
            { title: '权限列表', id: 2001, path: 'auth' },
            { title: '角色列表', id: 2002, path: 'roles' }
          ]
        },
        { title: '商品管理', id: 3, path: 'products' },
        { title: '订单管理', id: 4, path: 'orders' },
        { title: '数据统计', id: 5, path: 'statics' },
        { title: '系统管理', id: 6, path: 'sys_manager' }
      ]
    },
    collapseMenu() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
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
.toggle-button {
  background-color: #74a0d6;
  text-align: center;
  cursor: pointer;
  letter-spacing: 0.2em;
}
</style>
