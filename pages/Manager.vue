<template>
  <div class="container">
    <h2>Total amount</h2>
    <section class="row">
      <RestaurantOwnerTablesControl
        @handleOwnerTableClick="handleOwnerTableClick"
        class="col"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerSelectedTable class="col-5" />
    </section>
    <section class="row">
      <RestaurantOwnerPayment class="col-7" />
      <RestaurantOwnerOrders @completedItem="completedItem" />
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

<style scoped></style>
