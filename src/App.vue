<script setup>
import { onMounted, ref } from "vue";
import { createRenderer } from "./systems/renderer.js";

const canvas = ref(null);
const showCanvas = ref(false);
let stlFile;

function renderObject(event) {
  // console.log(stlFile);
  showCanvas.value = true;
  // console.log(fileURL);
  createRenderer(stlFile, canvas);
}

onMounted(() => {
  // createRenderer("", canvas);
});
</script>

<template>
  <v-container fluid>
    <v-row class="px-7">
      <h1 class="mt-2 mr-5">STL Viewer</h1>

      <v-file-input
        v-model="stlFile"
        @change="renderObject"
        label="Load STL File"
        variant="outlined"
        accept=".stl"
        class="mt-3 ml-5"
      />
    </v-row>

    <v-spacer />

    <!-- <v-row v-if="showCanvas"> -->
    <canvas ref="canvas" />
    <!-- </v-row> -->

    <!-- <v-row v-else justify="center" no-gutters> -->
    <!-- <h1>Upload a File to preview</h1> -->
    <!-- </v-row> -->

    <v-spacer />

    <v-row> © Tutui from Brazil ⚡ </v-row>
  </v-container>
</template>

<style scoped></style>
