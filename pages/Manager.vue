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
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
</script>

<style scoped></style>
