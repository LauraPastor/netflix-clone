<template>
  <div class="input-container">
    <input class="px-lg pt-lg px-xs" type="text" placeholder=" " v-model="firstName" />
    <label for="firstName">Name</label>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const firstName = ref('')
</script>
<style lang="css" scoped>
.input-container {
  position: relative;
}
input {
  display: block;
  border-radius: 9px;
  border: none;
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: rgba(64, 64, 64, 0.5);
}
input:focus {
  outline: none;
}
label {
  position: absolute;
  top: 6px;
  left: 24px;
}
input:focus + label {
  transform: scale(0.75) translateY(-12px);
}
</style>
