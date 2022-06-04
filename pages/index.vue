<template>
  <div class="container">
    <Hero :props="heroInfo" />
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div v-for="table in restaurantStore.tables" :key="table.id" class="col">
        <SpecialCards
          :table="table"
          @click="restaurantStore.HANDLE_TABLE_CLICK(table)"
        />
      </div>
    </div>
    <TableDetailModal v-if="restaurantStore.isTableSelected" />
    <IconGrid />
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();

let heroInfo = reactive({
  title: 'Hello App',
  text: 'Welcome to you best restaurant app',
});
</script>

<style scoped></style>
