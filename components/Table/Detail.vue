<template>
  <div>
    <h2>Table information</h2>
    <h2>Table: {{ store.custumerTable.name }}</h2>
    <h2>Number of guest:{{ store.custumerTable.number_of_guests }}</h2>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let store = useRestaurantStore();
</script>

<style scoped></style>
