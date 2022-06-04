<template>
  <div class="row row-cols-2 row-cols-md-3 g-4 my-2 justify-content-start">
    <div class="col" v-for="menu in store.filtered_menu">
      <MenuSingleItem :menu="menu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../../store/restaurant';
let store = useRestaurantStore();
store.fetch(); // fix
</script>

<style scoped></style>
