<template>
  <form class="pa-xl">
    <h2 class="title mb-md">Sing in</h2>
    <InputForm />
  </form>
</template>
<script setup>
import InputForm from './InputForm.vue'
</script>
<style lang="css" scoped>
form {
  background-image: var(--gradient-bg);
  width: 448px;
  max-width: 448px;
  border-radius: 9px;
}
.title {
  font-size: 36px;
  font-weight: 600;
}
input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  margin-bottom: 16px;
}
</style>
