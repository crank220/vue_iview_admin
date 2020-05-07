<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <div class="layout-logo">iview后台系统</div>
          <div class="layout-nav">
            <Dropdown class="label" @on-click="AdminLoginOut">
              <Icon type="md-person" />sss<Icon type="ios-arrow-down"/>
              <DropdownMenu slot="list">
                <DropdownItem name="loginOut">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger>
          <Menu :active-name="$route.name" theme="light" width="auto" :open-names="openMenu"  v-if="routerLoadOver">
            <div class="menu-box" v-for="(items, keys) in routerOptions" :key="keys">
              <template v-if="!items.meta.notMenu">
                <Submenu v-if="!!items.children" :name="items.name">
                  <template slot="title">
                    <Icon type="md-menu"></Icon>{{items.meta.title}}
                  </template>
                  <MenuItem v-for="(item, key) in items.children" :key="key" :to="item.path" :name="item.name">{{item.meta.title}}</MenuItem>
                </Submenu>
                <MenuItem v-else :name="items.name" :to="items.path">{{items.meta.title}}</MenuItem>
              </template>
            </div>
          </Menu>
        </Sider>
        <Layout :class="['right-layout', fullScreen ? 'full-screen' : '']">
          <div class="layout-right-header">
            <Breadcrumb v-if="routerLoadOver">
              <BreadcrumbItem v-for="item in $route.matched" :key="item.name">{{item.meta.title}}</BreadcrumbItem>
            </Breadcrumb>
            <div class="fun">
              <Tooltip :content="fullScreen ? '收起全屏' : '全屏'" theme="light">
                <Icon :type="fullScreen ? 'md-contract' : 'md-qr-scanner'" @click="fullScreen =!fullScreen" />
              </Tooltip>
            </div>
          </div>
          <Content>
            <slot />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import router from '../../../router/index'
export default {
  name: "Layouts",
  data() {
    return {
      routerLoadOver: false,
      fullScreen: false
    }
  },
  computed: {
    routerOptions() {
      return router.options.routes
    },
    openMenu() {
      return this.$route.matched.length > 1 ? [ this.$route.matched[0].name ] : []
    }
  },
  watch: {
    $route(v) {
      (v.name) && (this.routerLoadOver = true)
    }
  },
  methods: {
    AdminLoginOut(v) {
      if (v === "loginOut") {
        setTimeout(() => {
          this.$Message.success("退出成功")
          this.$router.push({ path: "/login" })
        }, 1000)
      }
    }
  },
  mounted() {
    (this.$route.name) && (this.routerLoadOver = true)
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  /deep/ .ivu-layout {
    height: 100%;
    .ivu-layout-header{
      padding: 0 24px;
      .ivu-menu{
        display: flex;
      }
    }
    .ivu-layout.ivu-layout-has-sider{
      height: calc(100% - 64px);
    }
  }
  .layout-logo {
    color: white;
    float: left;
    font-size: 18px;
  }
  .layout-nav {
    margin: 0 auto;
    margin-right: 20px;
    color: #fff;
    .ivu-icon{
      font-size: 20px;
      margin-right: 6px;
    }
    .label{
      margin-left: 10px;
      cursor: pointer;
      display: inline-block;
      .ivu-icon{
        font-size: 16px;
        margin: 0 6px;
      }
      &:nth-child(1){
        margin-left: 0;
      }
    }
  }
  .ivu-layout-sider{
    background: #fff;
    .ivu-layout-sider-children{
      .ivu-menu-light{
        height: 100%;
        overflow: auto;
        /deep/.ivu-icon{
          font-size: 16px;
        }
      }
    }
  }
  .right-layout{
    padding: 0 24px 24px;
    .layout-right-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
      .ivu-icon{
        font-size: 20px;
        cursor: pointer;
      }
      .fun{
        .ivu-tooltip{
          margin-right: 16px;
        }
        &:nth-child(1){
          margin-right: 0;
        }
      }
    }
    .ivu-layout-content{
      overflow: auto;
      padding: 24px;
      background: #fff;
    }
  }
  .full-screen{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>