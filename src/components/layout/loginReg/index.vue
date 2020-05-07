<template>
  <div class="login-reg">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LoginReg"
}
</script>

<style lang="scss" scoped>
.login-reg{
  background-color: #2d3a4b;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>