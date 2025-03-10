<script setup>
import {computed} from "vue";
import {strToAsciiBinArr} from "@/helper/stringConvert.js";
import {controls} from "@/reactive/Controls.js";

const textBin = computed(() => {
    return strToAsciiBinArr(controls.text).split('');
})

</script>

<template>
  <div class="container" v-bind:style="`width: ${controls.displayWidth}px; height: ${controls.displayHeight}px; background-color: ${controls.backgroundColor};`">
    <div v-for="b in textBin"
         v-bind:style="`width: ${controls.width}px; height: ${controls.height}px; background-color: ${b === '1' ? controls.tileColor : 'transparent'};`"
         class="tile"
    ></div>
  </div>
</template>

<style scoped>
  .container {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .tile {
  }
</style>