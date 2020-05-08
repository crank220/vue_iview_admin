<template>
  <div class="view-big-img-demo">
    <Card>
      <img :src="item" v-for="item in mockImgArr" :key="item" @click="viewImgSrc = item" />
    </Card>

    <Button @click="model = true">在modal中引用</Button>
    <Modal v-model="model" width="1200" :footer-hide="true" class="flag">
      <img :src="item" v-for="item in mockImgArr" :key="item" @click="viewImgSrc = item" />
    </Modal>

    <ViewBigImg :imgSrc="viewImgSrc" @close="viewImgSrc = ''" />
  </div>
</template>

<script>
import ViewBigImg from "../../../components/viewBigImg/index"
export default {
  name: "WorkshopViewBigImg",
  components: {
    ViewBigImg
  },
  data() {
    return {
      mockImgArr: ["http://pic1.win4000.com/wallpaper/c/56984cb655731.jpg", "http://pic1.win4000.com/wallpaper/4/56985459a06ce.jpg", "https://imgsa.baidu.com/%B0%B2%B6%E0%B7%D2_/pic/item/db1ce83c8922382cac4b5f95.jpg"],
      viewImgSrc: '',
      model: false
    }
  }
}
</script>

<style lang="scss" scoped>
.view-big-img-demo .ivu-card /deep/.ivu-card-body, .flag /deep/.ivu-modal-body{
  display: flex;
  justify-content: space-around;
  img{
    width: 30%;
    height: 300px;
    cursor: pointer;
    object-fit: contain;
  }
}
.ivu-btn{
  margin-top: 20px;
}
</style>