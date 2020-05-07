<template>
  <div id="app">
    <layoutLoginReg v-if="$route.meta.loginReg">
      <router-view />
    </layoutLoginReg>
    <layoutMenu v-else>
      <router-view />
    </layoutMenu>
  </div>
</template>

<script>
import layoutLoginReg from "./components/layout/loginReg/index"
import layoutMenu from "./components/layout/menu/index"
export default {
  name: "App",
  components: {
    layoutLoginReg,
    layoutMenu
  }
}
</script>

<style>
html,
body {
  height: 100%;
  overflow-y: hidden;
  min-width: 1280px;
}
</style>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>