<template>
  <div class="editor">
    <List border>
      <h2 slot="header">vue-quill-editor<Button type='primary' @click="htmlShow = !htmlShow">切换{{htmlShow ? "多文本" : "html"}}编辑器</Button></h2>
      <ListItem>
        github：<a target="_blank" href="https://github.com/surmon-china/vue-quill-editor">https://github.com/surmon-china/vue-quill-editor</a>
      </ListItem>
    </List>

    <Input v-model="content" v-if="htmlShow" type="textarea" placeholder="Enter something..." />

    <quillEditor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      v-else />
      
    <List border>
      <ListItem>{{content}}</ListItem>
    </List>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: "Editor",
  components: {
    quillEditor
  },
  data() {
    return {
      content: `<h1>我是一个富文本编辑器！</h1>`,
      htmlShow: false,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    }
  },
  methods: {
    onEditorBlur(editor) {
      console.log("editor blur!", editor)
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor)
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor)
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill
    }
  },
  mounted() {
    console.log("this is my editor", this.editor)
  }
}
</script>

<style lang="scss" scoped>
.editor{
  .quill-editor{
    /deep/.ql-container{
      min-height: 400px;
    }
  }
  .ivu-btn{
    margin-left: 40px;
  }
  /deep/ .ivu-input-wrapper{
    textarea.ivu-input{
      height: 400px;
    }
  }
}
</style>