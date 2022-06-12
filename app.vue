<template>
  <Html>
    <Head>
      <!-- <Title>Menu App</Title> -->
      <Meta name="description" content="The best Menu App"></Meta>
    </Head>
  </Html>
  <Spinner v-if="store.appLoading" />
  <div v-else>
    <Nabvar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from './store/restaurant';
let store = useRestaurantStore();
getCollection('tables');
</script>

<style scoped></style>
