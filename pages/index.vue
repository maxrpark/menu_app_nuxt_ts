<template>
  <div class="container" v-if="restaurantStore.tables.length">
    <SectionTitle :props="heroInfo" class="mt-5" />
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div v-for="table in restaurantStore.tables" :key="table.id" class="col">
        <SpecialCards
          :table="table"
          @click="restaurantStore.HANDLE_TABLE_CLICK(table)"
        />
      </div>
    </div>
    <SectionTitle :props="features" />
    <TableDetailModal v-if="restaurantStore.isTableSelected" />
    <IconGrid />
    <SectionTitle :props="carouselText" />
    <Carrousel />
  </div>
  <Spinner v-else />
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();

onMounted(() => {
  window.scrollTo(0, 0);
});

let heroInfo = reactive({
  title: 'Hello Menu App',
  text: 'Welcome to the best restaurant experience',
});
let features = reactive({
  title: 'Checkout features',
  text: 'This are only few of the features of this app',
});
let carouselText = reactive({
  title: 'Amazing views',
  text: 'We have some best views in the universe',
});
</script>

<style scoped></style>
