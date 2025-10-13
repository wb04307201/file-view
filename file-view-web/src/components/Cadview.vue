<script setup lang="ts">
import { AcApDocManager, registerWorkers } from '@mlightcad/cad-simple-viewer'
import type { AcDbOpenDatabaseOptions } from '@mlightcad/data-model'
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

onMounted(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  registerWorkers();

  try {
    // Initialize the document manager with the canvas
    AcApDocManager.createInstance(canvas)
    // Load default fonts
    await AcApDocManager.instance.loadDefaultFonts()
  } catch (error) {
    console.error('Failed to initialize CAD viewer:', error)
  }

  const file = await fetch(`/wopi/files/${ route.query.id }`).then(res => res.json());
  const arrayBuffer = await fetch(`/wopi/files/${ route.query.id }/contents`).then(response => response.arrayBuffer());

  // Set database options
  const options: AcDbOpenDatabaseOptions = {
    minimumChunkSize: 1000,
    readOnly: true
  }

  try{
    // Open the document
    const success = await AcApDocManager.instance.openDocument(
        file.BaseFileName,
        arrayBuffer,
        options
    )

    if (!success) {
      console.error(`Failed to load: ${file.name}`, 'error')
    }
  } catch (error) {
    console.error('Error loading file:', error)
  }

});
</script>

<template>
  <canvas id="canvas"></canvas>
</template>

<style>
</style>