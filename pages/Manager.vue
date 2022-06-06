<template>
  <div class="container">
    <Hero :props="heroInfo" />
    <div
      class="d-flex justify-content-between align-items-center my-3 bg-success total-amount p-2"
    >
      <h2>Total Today</h2>
      <h2>${{ restaurantStore.GET_RESTAURANT_DAILY_TOTALS() }}</h2>
    </div>
    <section class="row">
      <RestaurantOwnerTablesControl
        @reserveOrClearTable="reserveOrClearTable"
        class="col-12 col-md-5 col-lg-6"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerSelectedTable class="col-12 col-md-7 col-lg-6" />
    </section>

    <section class="row">
      <RestaurantOwnerPayment
        @clearTable="reserveOrClearTable"
        class="col-12 col-md-5 col-lg-6"
      />
      <RestaurantOwnerOrders
        class="col-12 col-md-7 col-lg-6"
        @completedItem="completedItem"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
import { db } from '../firebase/config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { TableInterface } from '../ts/interfaces/globalInterfaces';
let restaurantStore = useRestaurantStore();
let heroInfo = reactive({
  title: 'Manager section',
  text: 'Restaurant dashboard',
});

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const timestamp = `${day}-${month}-${year}`;
getCollection('checkout_orders', ['date', '==', timestamp]);

const reserveOrClearTable = (table: TableInterface) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', table.id);
  updateDoc(docRef, {
    available: !table.available,
    number_of_guests: 0,
    order: [],
    total_amount: 0,
  });
  restaurantStore.selectedTable = {} as TableInterface;
};

const completedItem = (id: string) => {
  const docRef = doc(db, 'orders', id);
  deleteDoc(docRef);
};
</script>

<style scoped>
.total-amount h2 {
  color: white;
  margin: 0;
}
</style>
