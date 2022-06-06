<template>
  <div class="shadow p-3">
    <h2 class="text-capitalize">Table: {{ store.selectedTable.name }}</h2>
    <div class="section" v-if="store.selectedTable.order">
      <TableOrdersDetails
        class="my-3"
        :orders="store.selectedTable.order"
        :total="store.selectedTable.total_amount"
      />
      <button @click="store.TABLE_CHECK_OUT" class="btn btn-primary">
        Close table
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
const store = useRestaurantStore();
</script>

<style scoped></style>
