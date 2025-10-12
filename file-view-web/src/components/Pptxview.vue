<script setup lang="ts">
import VueOfficePptx from '@vue-office/pptx'
</script>

<template>
  <vue-office-pptx
      :src="`/wopi/files/${ $route.query.id }/contents`"
      style="height: 100vh;"
  />
</template>

<style scoped>
</style>
