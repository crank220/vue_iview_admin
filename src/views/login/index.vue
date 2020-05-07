<template>
  <div class="login">
    <h3>iview后台系统</h3>
    <Input v-model="params.userName" prefix="ios-contact" placeholder="请输入用户名称" @keydown.enter.native="login" />
    <Input v-model="params.userPwd" prefix="ios-lock" type="password" @keydown.enter.native="login" password placeholder="请输入登录密码" />
    <Button type="primary" size="large" @click="login" :loading="loading">登录</Button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      params: {
        ip: '111',
        userName: '',
        userPwd: '',
      },
      loading: false
    }
  },
  methods: {
    login() {
      const { userName, userPwd } = this.params
      if (userName && userPwd) {
        this.loading = true
        setTimeout(() => {
          this.$router.push({ path: '/' })
          this.$Message.success(`欢迎您，sss`)
          this.loading = false
        }, 1000)
      } else {
        this.$Message.error("账号密码不能为空")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 450px;
  margin: 0 auto;
  padding: 160px 0 0;
  h3{
    color: white;
    font-size: 26px;
    text-align: center;
    margin-bottom: 40px;
  }
  /deep/ .ivu-input-wrapper{
    margin-bottom: 22px;
    .ivu-input{
      background: rgba(0,0,0,.1);
      border: 1px solid hsla(0,0%,100%,.1);
      border-radius: 5px;
      color: white;
      height: 50px;
      padding: 0 40px;
    }
    .ivu-input-suffix{
      width: 40px;
      line-height: 50px;
      i{
        font-size: 24px;
      }
    }
    .ivu-input-prefix{
      width: 40px;
      line-height: 50px;
      i{
        font-size: 20px;
      }
    }
  }
  .ivu-btn-primary{
    width: 100%;
  }
}
</style>