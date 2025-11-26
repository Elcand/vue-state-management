<script setup>
import { reactive, ref } from "vue";

// // contoh ref
// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// });

// reactivity
const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});

function generateColor() {
  // // ref
  // color.value.red = Math.floor(Math.random() * 256);
  // color.value.green = Math.floor(Math.random() * 256);
  // color.value.blue = Math.floor(Math.random() * 256);

  // reactivity
  color.red = Math.floor(Math.random() * 256);
  color.green = Math.floor(Math.random() * 256);
  color.blue = Math.floor(Math.random() * 256);
}
</script>

<template>
  <main
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <div>
      <input type="number" placeholder="red" v-model="color.red" id="" />
      <input type="number" placeholder="green" v-model="color.green" id="" />
      <input type="number" placeholder="blue" v-model="color.blue" id="" />
      <button @click="generateColor">Generate Color</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(122, 50, 225);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
