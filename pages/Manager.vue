<template>
  <div class="container" v-if="restaurantStore.tables.length">
    <SectionTitle :props="heroInfo" />
    <RestaurantOwnerTotalSales />

    <section class="row">
      <RestaurantOwnerTablesControl
        @reserveOrClearTable="reserveOrClearTable"
        class="col-12 col-md-5 col-lg-5"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerSelectedTable class="col-12 col-md-6 col-lg-6" />
    </section>

    <section class="row">
      <RestaurantOwnerPayment
        @clearTable="reserveOrClearTable"
        class="col-12 col-md-5 col-lg-5"
      />
      <RestaurantOwnerOrders
        class="col-12 col-md-6 col-lg-6"
        @completedItem="completedItem"
      />
    </section>
  </div>
  <Spinner v-else />
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

definePageMeta({
  middleware: 'auth',
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
.row {
  gap: 1rem;
  justify-content: center;
  margin: 1rem auto;
}
</style>
