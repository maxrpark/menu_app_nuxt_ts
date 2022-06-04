<template>
  <div>
    <h2>Table: {{ store.selectedTable.name }}</h2>
    <TableOrdersDetails
      v-if="store.selectedTable.order"
      :orders="store.selectedTable.order"
      :total="store.selectedTable.total_amount"
    />
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
const store = useRestaurantStore();
</script>

<style scoped></style>
