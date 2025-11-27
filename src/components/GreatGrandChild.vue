<template>
  <div>
    <h1>GreatGrandChild</h1>
    {{ numbers }}
  </div>
</template>

<script setup>
const { numbers } = defineProps(["numbers"]);
</script>

<style lang="scss" scoped></style>
