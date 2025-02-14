<template>
  <button class="btn-submit" type="submit">
    <slot></slot>
  </button>
</template>
<style>
button {
  padding: 16px 24px;
  margin-bottom: 16px;
  display: block;
  border-radius: 9px;
  border: none;
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: var(--primary-color);
}
</style>
