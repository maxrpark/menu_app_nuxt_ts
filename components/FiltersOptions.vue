<template>
  <div
    @click="store.filterMenu('category', category)"
    v-for="category in store.categories"
    :key="category"
  >
    <p>{{ category }}</p>
  </div>
  <section v-if="store.selectedCategory !== 'all'">
    <h2>sub</h2>
    <div
      @click="store.filterMenu('tags', sub_category)"
      v-for="sub_category in store.sub_categories"
      :key="sub_category"
    >
      <p>{{ sub_category }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../store/restaurant';

let store = useRestaurantStore();
</script>

<style scoped></style>
