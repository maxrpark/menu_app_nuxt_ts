<template>
  <div v-if="tables">
    <h2>Owner</h2>
    <div
      v-for="table in tables"
      :key="table.id"
      :class="`${table.available ? 'available' : 'not-available'}`"
    >
      {{ table.name }} ||
      <p>{{ table.available ? 'available' : 'not available' }}</p>
      <button @click="handleOwnerTableClick(table)" class="btn-primary">
        {{ table.available ? 'available' : 'not available' }}
      </button>
      <button @click="store.managerTableDetails(table.id)" class="btn-primary">
        tables details
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
import { db } from '@/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { useRestaurantStore } from '@/store/restaurant';
const store = useRestaurantStore();

interface PropsInt {
  tables: TableInterface[];
}
const props = defineProps<PropsInt>();

const handleOwnerTableClick = (table: TableInterface) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', table.id);
  updateDoc(docRef, {
    available: !table.available,
    number_of_guests: 0,
    order: [],
    total_amount: 0,
  });
};
</script>

<style scoped></style>
