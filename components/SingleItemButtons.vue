<template>
  <div
    v-if="
      restaurantStore.showAmount && menu.id === restaurantStore.selected_menu
    "
  >
    <button @click="confirmOrder(menu)" class="btn btn-primary d-flex mx-auto">
      Confirm
    </button>
    <div class="d-flex justify-content-around align-items-center my-2">
      <button @click="handleIncrease" class="btn btn-primary">+</button>
      <p class="m-0">{{ menu_amount }}</p>
      <button @click="handleDecrease" class="btn btn-primary">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../store/restaurant';
import { Menu } from '../ts/interfaces/globalInterfaces';
interface Props {
  menu: Menu;
}

const props = defineProps<Props>();

let restaurantStore = useRestaurantStore();

let pageRoute = useRoute();
const { handleIncrease, handleDecrease, menu_amount } = useMenuItems();

const confirmOrder = (menu: Menu) => {
  useAddOrder(
    menu,
    restaurantStore.custumerTable,
    menu_amount.value,
    pageRoute.params.tableID
  );

  menu_amount.value = 0;
  restaurantStore.showAmount = false;
  restaurantStore.selected_menu = '';
};
</script>

<style scoped></style>
