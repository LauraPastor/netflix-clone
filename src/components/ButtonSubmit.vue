<template>
  <button :class="[primary ? 'primary' : '']">
    {{ label }}
  </button>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  label: {
    type: String,
    default: 'Submit',
  },
  primary: {
    type: Boolean,
    default: true,
  },
})
</script>
<style lang="css" scoped>
button {
  border: none;
  background: none;
  border-radius: 9px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 24px;
  transition: background-color 0.3s;
}
.primary {
  background-color: var(--primary);
  color: var(--on-primary);
}
.primary:hover {
  background-color: var(--primary-dark);
}
</style>
