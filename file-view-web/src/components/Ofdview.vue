<script setup lang="ts">
import {Ofdview} from 'ofdview-vue3';
import * as parser from 'parser_x.js'
</script>

<template>
  <div style="height: 100vh;">
    <Ofdview
        :mem="parser"
        :canOpen="false"
        :canClose="false"
        :file="`/wopi/files/${ $route.query.id }/contents`"
    ></Ofdview>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
