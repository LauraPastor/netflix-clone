<template>
  <form class="pa-xl">
    <h2 class="title mb-md">Sing up</h2>
    <InputForm id="firstName" v-model="firstName" />
    <InputForm id="lastName" v-model="lastName" label="Last Name" />
    <InputForm id="email" label="Email" type="email" v-model="email" />
    <InputForm id="password" label="Pasword" type="password" v-model="password" />
    <ButtonSubmit>Submit</ButtonSubmit>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import InputForm from './InputForm.vue'
import ButtonSubmit from './ButtonSubmit.vue'
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
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
  margin-bottom: 6px;
}
</style>
