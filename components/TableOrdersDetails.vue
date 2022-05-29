<template>
  <div v-if="orders">
    <h2>My Order</h2>
    <div v-for="item in orders" :key="item.id">
      <p>{{ item.comida }}</p>
      <p>Price: {{ item.price }}</p>
      <p>Amount: {{ item.amount }}</p>
      <p>sub total: ${{ item.amount * item.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrderInterface } from '../ts/interfaces/globalInterfaces';
interface Props {
  orders: OrderInterface[];
}

const props = defineProps<Props>();
</script>

<style scoped></style>
