<template>
  <div class="col">
    <h2>Orders</h2>
    <div
      class="row m-0 text-light p-2 bg-danger"
      v-for="order in orders"
      :key="order.id"
      @click="$emit('completedItem', order.id)"
    >
      <p class="col-5">
        {{ order.table_name }}
      </p>
      <p class="col-5">
        {{ order.name }}
      </p>
      <p class="col-1">
        {{ order.amount }}
      </p>
      <p class="col-1">x</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['completedItem']);

const { documents: orders } = getCollection('orders');
</script>

<style scoped></style>
