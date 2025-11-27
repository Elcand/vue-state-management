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
import { useNumberStore } from "@/stores/number";

const { numbers } = useNumberStore();
</script>

<style scoped></style>
