<template>
  <div class="container">
    <h2>Total amount</h2>
    <section class="row">
      <RestaurantOwnerTablesControl
        class="col"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerTablesControl
        class="col-5"
        :tables="restaurantStore.tables"
      />
    </section>
    <section class="row">
      <RestaurantOwnerTablesControl
        class="col-7"
        :tables="restaurantStore.tables"
      />
      <div class="col">
        <h2>Orders</h2>
        <pre>{{ orders }}</pre>
        <!-- class="d-flex justify-content-between align-items-center m-0 text-light p-2 bg-danger height-100" -->
        <div
          :style="{ height: '30px' }"
          v-for="order in orders"
          :key="order.id"
        >
          <p>
            {{ order.name }}
          </p>
          <p>
            {{ order.amount }}
          </p>
          <p>complete</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
const { documents: orders } = getCollection('orders');
</script>

<style scoped></style>
