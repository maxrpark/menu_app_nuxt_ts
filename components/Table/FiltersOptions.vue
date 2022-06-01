<template>
  <h2 class="h2 text-center my-4">Categories</h2>
  <TableFilterButtons
    :types="store.categories"
    :selectedType="store.selectedCategory"
    optionFilter="category"
  />
  <section v-if="store.selectedCategory !== 'all'">
    <h2 class="h4 text-center my-4">Sub Categories</h2>
    <TableFilterButtons
      :types="store.sub_categories"
      :selectedType="store.sub_category"
      optionFilter="tags"
    />
  </section>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../../store/restaurant';

let store = useRestaurantStore();
</script>

<style scoped></style>
