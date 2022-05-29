<template>
  <div class="card">
    <img :src="menu.url" class="card-img-top" :alt="menu.name" />
    <div class="card-body">
      <h5 class="card-title">{{ menu.name }}</h5>
      <p class="card-text">$ {{ menu.price }}</p>

      <button
        @click="restaurantStore.addToOder(menu.id)"
        class="btn btn-primary"
      >
        Add to order
      </button>

      <div
        v-if="
          restaurantStore.showAmount &&
          menu.id === restaurantStore.selected_menu
        "
      >
        <button @click="handleIncrease" class="btn btn-primary">+</button>
        <button @click="confirmOrder(menu)" class="btn btn-primary">
          Confirm
        </button>
        <h2>amount: {{ menu_amount }}</h2>
        <button @click="handleDecrease" class="btn btn-primary">-</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAddOrder from '../composables/useAddOrder';
import { Menu } from '../ts/interfaces/globalInterfaces';
import useMenuItems from '../composables/useMenuItems';
import { useRestaurantStore } from '../store/restaurant';
let restaurantStore = useRestaurantStore();

interface Props {
  menu: Menu;
  tableID?: string;
}

const props = defineProps<Props>();

let pageRoute = useRoute();

let showAmount = restaurantStore.showAmount;
const { handleIncrease, handleDecrease, menu_amount } = useMenuItems();
// variables

const confirmOrder = (menu: Menu) => {
  useAddOrder(
    menu,
    restaurantStore.custumerTable,
    menu_amount.value,
    pageRoute.params.tableID
  );
  menu_amount.value = 0;
  showAmount = false;
};
</script>

<style scoped></style>
