<template>
  <div class="container">
    <div
      class="d-flex justify-content-between align-items-center my-3 bg-danger total-amount p-2"
    >
      <h2>Total amount</h2>
      <h2>$300</h2>
    </div>
    <section class="row">
      <RestaurantOwnerTablesControl
        @handleOwnerTableClick="handleOwnerTableClick"
        class="col-12 col-md-5 col-lg-6"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerSelectedTable class="col-12 col-md-7 col-lg-6" />
    </section>

    <section class="row">
      <RestaurantOwnerPayment class="col-12 col-md-5 col-lg-6" />
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

const handleOwnerTableClick = (table: TableInterface) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', table.id);
  restaurantStore.selectedTable = {} as TableInterface;
  updateDoc(docRef, {
    available: !table.available,
    number_of_guests: 0,
    order: [],
    total_amount: 0,
  });
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
