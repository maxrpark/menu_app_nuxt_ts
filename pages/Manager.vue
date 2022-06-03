<template>
  <div class="container">
    <h2>Total amount</h2>
    <section class="row">
      <RestaurantOwnerTablesControl
        class="col"
        :tables="restaurantStore.tables"
      />
      <RestaurantOwnerTablesControl
        class="col-5"
        :tables="restaurantStore.tables"
      />
    </section>
    <section class="row">
      <RestaurantOwnerTablesControl
        class="col-7"
        :tables="restaurantStore.tables"
      />
      <div class="col">
        <h2>Orders</h2>
        <div
          class="d-flex justify-content-between align-items-center m-0 text-light p-2 bg-danger height-100"
          :style="{ height: '30px' }"
          v-for="order in orders"
          :key="order.id"
          @click="completedItem(order.id)"
        >
          <p>
            {{ order.name }}
          </p>
          <p>
            {{ order.amount }}
          </p>
          <p>complete</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
let restaurantStore = useRestaurantStore();
const { documents: orders } = getCollection('orders');

const completedItem = (id: string) => {
  const docRef = doc(db, 'orders', id);
  deleteDoc(docRef);
};
</script>

<style scoped></style>
