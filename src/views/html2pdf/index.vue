<template>
  <div class="html2pdf">
    <box ref="box" />
    <div style="margin: 40px 0 16px;text-align: center;">
      <Button type="primary" size="large" @click="$refs['box'].getPdf()">生成pdf</Button>
    </div>
  </div>
</template>

<script>
import box from "./cell/box"
export default {
  name: "Html2pdf",
  components: {
    box
  }
}
</script>