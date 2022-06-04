<template>
  <div class="container my-5">
    <!-- pe-lg-0  -->
    <div class="row p-3 rounded-3 border shadow-lg">
      <div class="d-flex justify-content-between align-items-center p-3">
        <h1 class="display-4 fw-bold lh-1">
          {{ restaurantStore.custumerTable.name }}
        </h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
          >
            Call Waiter
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Ask for bill
          </button>
        </div>
      </div>
      <p
        v-if="restaurantStore.custumerTable.name"
        class="lead"
        v-html="
          restaurantStore.tableDescription(restaurantStore.custumerTable.desc)
        "
      ></p>
      <Collapse
        text="Order Details"
        identifier="toogleOrders"
        v-if="restaurantStore.custumerTable.order"
      >
        <TableOrdersDetails
          :orders="restaurantStore.custumerTable.order"
          :total="restaurantStore.custumerTable.total_amount"
        />
      </Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
</script>

<style scoped>
.image {
  max-height: 300px;
  object-fit: cover;
  object-position: center;
}
</style>
