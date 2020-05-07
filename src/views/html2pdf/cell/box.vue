<template>
  <div class="box" ref="box">
    <List border>
      <h2 slot="header">html2pdf.js</h2>
      <ListItem>
        github：<a target="_blank" href="https://github.com/eKoopmans/html2pdf.js">https://github.com/eKoopmans/html2pdf.js</a>
      </ListItem>
    </List>
    <List style="margin: 20px 0 0;" border>
      <h2 slot="header">相关配置</h2>
      <ListItem>
        html2canvas：<a target="_blank" href="http://html2canvas.hertzen.com/configuration/">http://html2canvas.hertzen.com/configuration/</a>
      </ListItem>
      <ListItem>
        jsPDF：<a target="_blank" href="http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html">http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html</a>
      </ListItem>
      <ListItem>
        其他配置：<a target="_blank" href="https://github.com/eKoopmans/html2pdf.js#options">https://github.com/eKoopmans/html2pdf.js#options</a>
      </ListItem>
    </List>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js"
export default {
  name: "Box",
  methods: {
    getPdf() {
      html2pdf().set({
        margin: .8,
        filename: `icrank${new Date().getTime()}.pdf`,
        // image: { type: 'jpeg', quality: 0.98 },
        pagebreak: { mode: ['avoid-all'] },
        // html2canvas: { scale: 2 },
        // html2canvas: {
        //   width: 1000,
        //   letterRendering: true
        // },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }).from(this.$el).save()
    }
  }
}
</script>