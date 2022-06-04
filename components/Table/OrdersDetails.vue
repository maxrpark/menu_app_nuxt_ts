<template>
  <div v-if="orders">
    <div class="row">
      <p class="col">name</p>
      <p class="col">Price</p>
      <p class="col">Amount</p>
      <p class="col">sub total</p>
    </div>
    <div class="row" v-for="item in orders" :key="item.id">
      <p class="col">{{ item.name }}</p>
      <p class="col">Price: {{ item.price }}</p>
      <p class="col">Amount: {{ item.amount }}</p>
      <p class="col">sub total: ${{ item.amount * item.price }}</p>
    </div>
    <h2>total:$ {{ total }}</h2>
  </div>
</template>

<script setup lang="ts">
import { OrderInterface } from '../../ts/interfaces/globalInterfaces';
interface Props {
  orders: OrderInterface[];
  total: number;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
