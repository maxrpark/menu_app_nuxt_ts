<template>
  <div
    @click="selectedCategory(category)"
    v-for="category in store.categories"
    :key="category"
  >
    <p>{{ category }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../store/restaurant';

let store = useRestaurantStore();

const selectedCategory = (category: string) => {
  store.selectedCategory = category;
  store.filterMenu(category);
};
</script>

<style scoped></style>
