<template>
  <div class="upload-img-demo">
    <UploadImg :imgLink="imgLink" @uploadSuccess="rst => uploadSuccess('try', rst)"  @delete="imgLink = ''" />
    <cellGroup>
      <Cell>组件功能：增删改图片、获取尺寸、预览大图</Cell>
    </cellGroup>
  </div>
</template>

<script>
import UploadImg from "../../../components/uploadImg/index"
export default {
  name: "WorkshopUploadImg",
  components: {
    UploadImg
  },
  data() {
    return {
      imgLink: ''
    }
  },
  methods: {
    uploadSuccess(type, res) {
      // (type === 'try') && (this.imgLink = res.id)
      (type === 'try') && (this.imgLink = "http://pic1.win4000.com/wallpaper/c/56984cb655731.jpg")
      this.$Message.success("文件上传成功")
    }
  }
}
</script>