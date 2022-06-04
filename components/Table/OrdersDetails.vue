<template>
  <div v-if="orders">
    <div
      class="title row bg-primary d-flex align-items-center justify-content-center mb-3 g-0"
    >
      <p class="col text-start">name</p>
      <p class="col">Price</p>
      <p class="col">Amount</p>
      <p class="col">sub total</p>
    </div>
    <div class="row" v-for="item in orders" :key="item.id">
      <p class="col text-start">{{ item.name }}</p>
      <p class="col">{{ item.price }}</p>
      <p class="col">{{ item.amount }}</p>
      <p class="col">${{ item.amount * item.price }}</p>
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

<style scoped>
p {
  text-transform: capitalize;
  text-align: center;
}
.title p {
  margin: 0;
  padding: 1rem;
  color: white;
}
</style>
