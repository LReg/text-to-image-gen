<script setup>

import {controls} from "@/reactive/Controls.js";
</script>

<template>
  <div>
  <h1>Controls</h1>
  <div class="container">
    <label for="text">Text</label>
    <input v-model="controls.text" />

    <label for="height">Height</label>
    <input v-model="controls.height" type="number" />

    <label for="width">Width</label>
    <input v-model="controls.width" type="number" />

    <label for="displayHeight">Display Height</label>
    <input v-model="controls.displayHeight" type="number" />

    <label for="displayWidth">Display Width</label>
    <input v-model="controls.displayWidth" type="number" />

    <label for="tileColor">Tile Color</label>
    <input v-model="controls.tileColor" type="color" />

    <label for="backgroundColor">Background Color</label>
    <input v-model="controls.backgroundColor" type="color" />
  </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
</style>