<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="menu in store.filtered_menu" style="width: 18rem">
      <SingleItem :menu="menu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../store/restaurant';
let store = useRestaurantStore();
store.fetch();
</script>

<style scoped></style>
