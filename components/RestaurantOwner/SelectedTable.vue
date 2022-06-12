<template>
  <div class="shadow p-3">
    <h2 class="text-capitalize text-center">{{ title }}</h2>
    <div class="section" v-if="store.selectedTable.order">
      <TableOrdersDetails
        class="my-3"
        :orders="store.selectedTable.order"
        :total="store.selectedTable.total_amount"
      />
      <div class="d-flex justify-content-center">
        <button
          @click="store.TABLE_CHECK_OUT"
          class="btn btn-primary text-uppercase"
        >
          Close table
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
const store = useRestaurantStore();

let title = computed(() => {
  return store.selectedTable.name
    ? `Table: ${store.selectedTable.name}`
    : 'No table selected';
});
</script>

<style scoped></style>
