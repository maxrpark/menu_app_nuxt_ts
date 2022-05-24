<template>
  <div class="section">
    <h1>orders</h1>
    <div v-for="comida in foodMenu" :key="comida.name" class="div">
      <h2>{{ comida.name }}</h2>
      <h2>{{ comida.price }}</h2>
      <div class="amount">
        <button @click.prevent="handleDecrease(comida)">-</button>
        <span>{{ comida.amount }}</span>
        <button @click.prevent="handleIncrease(comida)">+</button>
      </div>
      <div class="add-btn">
        <button @click="addToOrder(comida, comida.amount)">add to order</button>
      </div>
    </div>
  </div>
  <div v-if="ordersDetails">
    <div v-for="item in ordersDetails" :key="item.name">
      <p>name: {{ item.name }}</p>
      <p>amount: {{ item.amount }}</p>
      <p>total: {{ item.total }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const foodMenu = reactive({
  milanesa: {
    name: 'Milanesa',
    price: 9,
    amount: 0,
  },
  pizza: {
    name: 'Pizza',
    price: 10,
    amount: 0,
  },
  hamburguesa: {
    name: 'Hamburguesa',
    price: 8,
    amount: 0,
  },
});
</script>

<style scoped></style>
