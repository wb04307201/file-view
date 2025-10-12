<script setup lang="ts">
import * as OV from 'online-3d-viewer';
import {onMounted} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();

onMounted(async () =>{
  // get the parent element of the viewer
  let parentDiv = document.getElementById ('online_3d_viewer') as HTMLElement;

  // initialize the viewer with the parent element and some parameters
  let viewer = new OV.EmbeddedViewer (parentDiv, {});


  const file = await fetch(`/wopi/files/${ route.query.id }`).then(res => res.json());
  const blob = await fetch(`/wopi/files/${ route.query.id }/contents`).then(res => res.blob());
  const dataFile = new File([blob], file.BaseFileName);

  viewer.LoadModelFromFileList([dataFile]);
})
</script>

<template>
  <div id="online_3d_viewer"
       style="width: 100%; height: 100vh"
  />
</template>

<style scoped>
</style>
