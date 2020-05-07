<template>
  <div class="home">
    <!-- <h2>富文本编辑器 demo</h2>
    <Editor />

    <h2>markdown demo</h2>
    <Markdown /> -->
  </div>
</template>

<script>
// import Editor from '../../components/editor/index'
// import Markdown from '../../components/markdown/index'
export default {
  name: "Home",
  components: {
    // Editor,
    // Markdown
  }
}
</script>

<style lang="scss" scoped>
.home {
  h2{
    margin: 50px 0 20px 0;
    color: #2d8cf0;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
}
</style>