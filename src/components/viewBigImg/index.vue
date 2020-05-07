<template>
  <Modal v-model="show" :footer-hide="true">
    <img :src="imgSrc">
  </Modal>
</template>

<script>
export default {
  name: "ViewBigImg",
  props: {
    imgSrc: String,
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    imgSrc(v) {
      (v) && (this.show = true)
    },
    show(v) {
      (!v) && this.$emit("close")
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .ivu-modal-wrap{
	.ivu-modal{
		width: 1200px !important;
		top: 5%;
	}
	.ivu-modal-body{
    text-align: center;
    img{
      max-width: 90%;
      max-height: 90%;
      vertical-align: top;
    }
  }
}
</style>