<script setup lang="ts">
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'
//引入相关样式
import '@vue-office/docx/lib/index.css'
</script>

<template>
  <vue-office-docx
      :src="`/wopi/files/${ $route.query.id }/contents`"
      style="height: 100vh;"
  />
</template>

<style scoped>
</style>
