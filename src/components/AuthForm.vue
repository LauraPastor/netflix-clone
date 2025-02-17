<template>
  <form class="pa-xl">
    <h2 class="title mb-md">{{ isLogged ? 'Log in' : 'Sign up' }}</h2>
    <div v-if="!isLogged">
      <InputForm id="firstName" v-model="firstName" />
      <InputForm id="lastName" v-model="lastName" label="Last Name" />
    </div>
    <InputForm id="email" label="Email" type="email" v-model="email" />
    <InputForm id="password" label="Pasword" type="password" v-model="password" />
    <ButtonSubmit :label="isLogged ? 'Log in' : 'Sign up'" primary class="mb-md" />
    <p>{{ isLogged ? 'Create an account' : 'Already have an account?' }}</p>
    <a @click="isLogged = !isLogged" class="link">{{ isLogged ? 'Sign up' : 'Log in' }}</a>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import InputForm from './InputForm.vue'
import ButtonSubmit from './ButtonSubmit.vue'

const isLogged = ref(true)

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
.link {
  color: var(--on-primary);
  cursor: pointer;
  font-weight: 600;
}
.link:hover {
  text-decoration: underline;
}
</style>
