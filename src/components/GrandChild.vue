<template>
  <div>
    <h1>GrandChild</h1>
    <div class="line"></div>
    <GreatGrandChild :numbers="numbers" />
  </div>
</template>

<script setup>
import GreatGrandChild from "./GreatGrandChild.vue";

const { numbers } = defineProps(["numbers"]);
</script>

<style lang="scss" scoped></style>
