<template>
  <div class="shadow p-3">
    <h2>Checkout</h2>
    <div v-if="store.table_check_out && store.selectedTable.order">
      <h3>Table resume</h3>
      <TableOrdersDetails
        class="my-3"
        :orders="store.selectedTable.order"
        :total="store.selectedTable.total_amount"
      />
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary text-uppercase" @click="handleCheckOut">
          confirm checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
const store = useRestaurantStore();
const colRef = collection(db, 'checkout_orders');

const emit = defineEmits(['clearTable']);

const handleCheckOut = async () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const timestamp = `${day}-${month}-${year}`;

  // create order
  const order = {
    table_id: store.selectedTable.id,
    date: timestamp,
    createdAt: serverTimestamp(),
    orders: store.selectedTable.order,
    total_amount: store.selectedTable.total_amount,
  };

  await addDoc(colRef, order);
  emit('clearTable', store.selectedTable);
};
</script>

<style scoped></style>
