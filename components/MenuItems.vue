<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div
      @click="selectedCategory(category)"
      v-for="category in store.categories"
      :key="category"
    >
      <p>{{ category }}</p>
    </div>
    <div
      class="col"
      v-for="menu in store.filtered_menu"
      :key="menu.id"
      style="width: 18rem"
    >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import useAddOrder from '../composables/useAddOrder';
import { useRestaurantStore } from '../store/restaurant';
import { Menu } from '../ts/interfaces/globalInterfaces';
let store = useRestaurantStore();
store.fetch();

// variables
let pageRoute = useRoute();
let showAmount = ref(false);
let selected_menu = ref<number | null>(null);
let menu_amount = ref(0);
let { documents, isLoading } = getCollection('tables', [
  'id',
  '==',
  pageRoute.params.tableID,
]);

// functions
const addToOder = (id: number) => {
  selected_menu.value = id;
  if (selected_menu.value === id) {
    showAmount.value = !showAmount.value;
  } else {
    showAmount.value = false;
  }
};

const confirmOrder = (menu: Menu) => {
  useAddOrder(
    menu,
    documents._rawValue[0],
    menu_amount.value,
    pageRoute.params.tableID
  );
  menu_amount.value = 0;
  showAmount.value = false;
};

const handleDecrease = () => {
  menu_amount.value--;
  if (menu_amount.value <= 0) menu_amount.value = 0;
};
const handleIncrease = () => {
  menu_amount.value++;
};

/// selected category

const selectedCategory = (category: string) => {
  store.selectedCategory = category;
  store.filterMenu(category);
};
</script>

<style scoped></style>
