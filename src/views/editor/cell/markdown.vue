<template>
  <div class="mavon-editor">
    <List border>
      <h2 slot="header">mavon-editor</h2>
      <ListItem>
        github：<a target="_blank" href="https://github.com/hinesboy/mavonEditor">https://github.com/hinesboy/mavonEditor</a>
      </ListItem>
    </List>

    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 400px" />
    
    <List border>
      <ListItem>{{content}}</ListItem>
      <ListItem>{{html}}</ListItem>
    </List>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
export default {
  name: 'MavonEditor',
  components: {
    mavonEditor
  },
  data() {
    return {
      content: "# 我是一个markdown编辑器！",
      html: ""
    }
  },
  methods: {
    change(value, render) {
      this.html = render
    }
  }
}
</script>

<style lang="scss" scoped>
.mavon-editor{
  .v-note-wrapper{
    z-index: 1000;
  }
}
</style>