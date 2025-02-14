<template>
  <div class="input-container">
    <input
      :id="id"
      :value="modelValue"
      class="px-lg pt-lg px-xs pb-xs"
      :type="type"
      placeholder=" "
      @input="
        (event) => {
          emit('update:modelValue', event.target.value)
        }
      "
    />
    <label for="id">{{ label }}</label>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'First Name',
  },
  modelValue: {
    type: [String, undefined],
    default: undefined,
  },
})
const emit = defineEmits(['update:modelValue'])
</script>
<style lang="css" scoped>
.input-container {
  position: relative;
}
input {
  padding: 16px 24px;
  margin-bottom: 16px;
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
  transition: transform 0.2s;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  transform: scale(0.75) translateY(-12px);
}
</style>
