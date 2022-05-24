<template>
  <div v-if="!isLoading">
    <!-- <div class="card-group"> -->
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="col"
        v-for="menu in store.menu"
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
    <div v-for="table in documents" :key="table.id">
      <h2>Table information</h2>
      <h2>Table: {{ table.name }}</h2>
      <h2>Number of guest:{{ table.number_of_guests }}</h2>
      <div></div>
    </div>
    <div v-if="documents.length">
      <h2>My Order</h2>
      <div v-for="item in documents[0].order" :key="item.id">
        {{ item.comida }}
        {{ item.price }}
        {{ item.amount }}
      </div>
    </div>
    <h1>Total: ${{ documents[0].total_amount }}</h1>
  </div>
  <div v-else>loading</div>
</template>

<script setup="" lang="ts">
import {
  TableInterface,
  OrderInterface,
} from '../../ts/interfaces/globalInterfaces';
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
import useAddOrder from '../../composables/useAddOrder';
import { useRestaurantStore } from '../../store/restaurant';

let store = useRestaurantStore();
store.setTables();
store.fetch();

let pageRoute = useRoute();
let showAmount = ref<boolean>(false);
let selected_menu = ref<number | null>(null);
let menu_amount = ref<number>(0);

const { documents, isLoading } = getCollection('tables', [
  'id',
  '==',
  pageRoute.params.tableID,
]);

watch(documents, (d: any) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', pageRoute.params.tableID);
  documents._rawValue[0].total_amount = documents._rawValue[0].order.reduce(
    (acc: number, item: any) => {
      return acc + item.total;
    },
    0
  );

  updateDoc(docRef, {
    total_amount: documents._rawValue[0].total_amount,
  });
});

const addToOder = (id: number) => {
  selected_menu.value = id;
  if (selected_menu.value === id) {
    showAmount.value = !showAmount.value;
  } else {
    showAmount.value = false;
  }
};

const confirmOrder = (menu: any) => {
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

////////////////////////////////////////////
</script>

<style scoped></style>
