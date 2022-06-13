<template>
  <div class="col shadow p-3">
    <h2>Orders</h2>
    <section v-if="orders.length">
      <div
        class="row m-0 text-light p-2 bg-primary justify-content-center my-2 text-capitalize"
      >
        <p class="m-0 col-4 d-flex align-items-center">table name</p>
        <p class="m-0 col-4 d-flex align-items-center justify-content-center">
          order
        </p>
        <p class="m-0 col-4 d-flex align-items-center justify-content-center">
          amount
        </p>
      </div>
      <div
        class="row m-0 text-light p-2 bg-danger justify-content-center my-2"
        v-for="order in orders"
        :key="order.id"
        @click="$emit('completedItem', order.id)"
      >
        <p class="m-0 col-5 d-flex align-items-center">
          {{ order.table_name }}
        </p>
        <p class="m-0 col-5 d-flex align-items-center">
          {{ order.name }}
        </p>
        <p class="m-0 col-1 d-flex align-items-center">
          {{ order.amount }}
        </p>
        <span class="col-1 d-flex align-items-center">x</span>
      </div>
    </section>
    <section v-else>
      <p class="text-center my-0">No orders left</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['completedItem']);

const { documents: orders } = getCollection('orders');
</script>

<style scoped></style>
