<template>
  <div class="card shadow">
    <img :src="menu.url" class="card-img-top" :alt="menu.name" />
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title">{{ menu.name }}</h5>
      <p class="card-text">$ {{ menu.price }}</p>
    </div>
    <div class="card-body">
      <p>{{ menu.desc }}</p>

      <button
        v-if="menu.id !== restaurantStore.selected_menu"
        @click="restaurantStore.addToOder(menu.id)"
        class="btn btn-primary d-flex mx-auto"
      >
        Add to order
      </button>

      <SingleItemButtons :menu="menu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '../store/restaurant';
let restaurantStore = useRestaurantStore();

interface Props {
  menu: Menu;
  tableID?: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.card {
  transition: all 0.3s linear;
}
.card:hover {
  box-shadow: 0px 0px 20px #000;
  transform: scale(1.02);
}
</style>
