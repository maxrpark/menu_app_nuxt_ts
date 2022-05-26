<template>
  <div class="card">
    <img :src="menu.url" class="card-img-top" :alt="menu.name" />
    <div class="card-body">
      <h5 class="card-title">{{ menu.name }}</h5>
      <p class="card-text">$ {{ menu.price }}</p>

      <button @click="addToOder(menu.id)" class="btn btn-primary">
        Add to order
      </button>

      <div v-if="showAmount && menu.id === selected_menu">
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

interface Props {
  menu: Menu;
  tableID?: string;
}

const props = defineProps<Props>();

// TODO FIX get table from store
let pageRoute = useRoute();
let { documents, isLoading } = getCollection('tables', [
  'id',
  '==',
  pageRoute.params.tableID,
]);

const {
  addToOder,
  handleIncrease,
  handleDecrease,
  menu_amount,
  showAmount,
  selected_menu,
} = useMenuItems();
// variables

const confirmOrder = (menu: Menu) => {
  useAddOrder(
    menu,
    // pageRoute.params.tableID,
    documents._rawValue[0],
    menu_amount.value,
    pageRoute.params.tableID
  );
  menu_amount.value = 0;
  showAmount.value = false;
};

handleDecrease();
handleIncrease();
</script>

<style scoped></style>
