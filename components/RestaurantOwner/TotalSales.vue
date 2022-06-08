<template>
  <div
    class="shadow d-flex justify-content-between align-items-center my-3 bg-success total-amount p-3 text-light"
  >
    <h2 class="m-0">Total Today</h2>
    <h2 class="m-0">${{ restaurantStore.GET_RESTAURANT_DAILY_TOTALS() }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
</script>

<style scoped></style>
