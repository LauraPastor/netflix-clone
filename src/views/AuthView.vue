<template>
  <div class="page">
    <nav class="py-sm px-md">
      <img src="@/assets/img/logo.png" alt="logo" class="nav__logo" />
    </nav>
    <div class="flex justify-center">
      <div>
        <AuthForm />
      </div>
    </div>
  </div>
</template>
<script setup>
import AuthForm from '@/components/AuthForm.vue'
</script>
<style lang="css" scoped>
.page {
  height: 100%;
  background-image: var(--gradient-bg), url('@/assets/img/hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.nav__logo {
  height: 80px;
}
</style>
