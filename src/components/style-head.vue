<template>
    <div class="head-style">
      <div class="about-h1">
        <h1>{{title}}</h1>
      </div>
      <div class="about-btm"></div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let title = ref()
</script>

<style scoped>
.head-style {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
}
.head-style > .about-h1 {
    font-size: 15px;
}
.head-style > .about-btm {
  width: 100px;
  height: 5px;
  background: linear-gradient(92.45deg, #f7c000 -4.21%, #7833f7 65%);
  border-radius: 10px;
}
</style>