<template>
  <div>
    <Nabvar />
    <main class="container">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
getCollection('tables');
</script>

<style scoped></style>
