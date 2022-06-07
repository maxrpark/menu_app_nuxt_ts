<template>
  <div>
    <Nabvar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
getCollection('tables');
</script>

<style scoped></style>
