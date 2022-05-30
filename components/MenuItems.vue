<template>
  <div class="row row-cols-2 row-cols-md-4 g-4 my-2 justify-content-start">
    <div class="col" v-for="menu in store.filtered_menu">
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
