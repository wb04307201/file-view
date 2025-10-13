<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import {onMounted} from "vue";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  if(route.query.path && route.query.id){
    router.push( {
      path: route.query.path as string,
      query: { id: route.query.id }
    })
  }
});
</script>

<template>
  <h1>加载中 ...</h1>
</template>

<style scoped>

</style>
