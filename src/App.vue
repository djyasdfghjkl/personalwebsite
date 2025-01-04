<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView />

  </header>

</template>

<style scoped>
header {
  width: 100vw;
  /* height: 100vh; */
  background: rgb(34, 193, 195);
  background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(45, 253, 212, 1) 100%);
}

html,
body {
  height: 100%;
  margin: 0;
}

.app-container {
  background: rgb(34, 193, 195);
  background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(45, 253, 212, 1) 100%);
  width: 100%;
  height: 100%;
}

.big_box {
  width: 100%;
  height: 100%;
}
</style>
