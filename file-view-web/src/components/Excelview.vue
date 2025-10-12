<script setup lang="ts">
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'
</script>

<template>
  <vue-office-excel
      :src="`/wopi/files/${ $route.query.id }/contents`"
      style="height: 100vh;"
  />
</template>

<style scoped>
</style>
