<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
    <div class="line"></div>
    <GrandChild :numbers="numbers" />
  </div>
</template>

<script setup>
import GrandChild from "./GrandChild.vue";

const { numbers } = defineProps(["numbers"]);
</script>

<style scoped></style>
