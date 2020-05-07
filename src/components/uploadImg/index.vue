<template>
  <div class="upload-img">
    <Upload type="drag" action="" :format="['jpg','jpeg','png','gif']" :show-upload-list="false"
      :on-success="rst => $emit('uploadSuccess', rst)" :on-error="uploadError" :on-format-error="uploadFormatError">
      <div class="upload">
        <div class="upload-remind" v-show="!imgLink">
          <Icon type="ios-cloud-upload" size="52"></Icon>
          <p v-show="!imgLink">单击或拖动文件</p>
        </div>
        <img :src="imgLink" v-show="imgLink">
        <div class="upload-handle" v-show="imgLink">
          <Icon type="ios-eye-outline" @click.stop="viewImgSrc = imgLink"></Icon>
          <Icon type="ios-trash-outline" @click.stop="$emit('delete')"></Icon>
        </div>
      </div>
    </Upload>
    <ViewBigImg :imgSrc="viewImgSrc" @close="viewImgSrc = ''" />
  </div>
</template>

<script>
import ViewBigImg from "../viewBigImg/index"
export default {
  name: "UploadImg",
  components: {
    ViewBigImg
  },
  props: {
    imgLink: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      viewImgSrc: ""
    }
  },
  methods: {
    uploadError() {
      this.$Message.error("上传失败")
    },
    uploadFormatError() {
      this.$Message.error("请上传jpg，jpeg，png，gif格式的图片")
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-img /deep/ .upload{
  position: relative;
  max-height: 150px;
  .upload-remind{
    margin: 20px 0;
    .ivu-icon{
      color: #3399ff;
    }
  }
  .upload-handle{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .ivu-icon{
      font-size: 40px;
    }
  }
  img{
    vertical-align: top;
    max-height: 150px;
    max-width: 100%;
  }
  &:hover .upload-handle{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(0,0,0,.3);
    color: #fff;
  }
}
</style>