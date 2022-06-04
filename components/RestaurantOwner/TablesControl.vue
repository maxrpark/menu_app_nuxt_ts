<template>
  <div v-if="tables">
    <h2>Tables</h2>
    <div
      v-for="table in tables"
      :key="table.id"
      :class="`${table.available ? 'available' : 'not-available'}`"
    >
      {{ table.name }} ||
      <p>{{ table.available ? 'available' : 'not available' }}</p>
      <button
        @click="$emit('handleOwnerTableClick', table)"
        class="btn-primary"
      >
        {{ table.available ? 'reserve' : 'clear' }}
      </button>
      <button
        @click="store.MANAGER_TABLE_DETAILS(table.id)"
        class="btn-primary"
      >
        tables details
      </button>
      <button
        @click="store.MANAGER_TABLE_DETAILS(table.id)"
        class="btn-primary"
      >
        close table
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '@/store/restaurant';
const store = useRestaurantStore();

interface PropsInt {
  tables: TableInterface[];
}
const props = defineProps<PropsInt>();

const emit = defineEmits(['handleOwnerTableClick']);
</script>

<style scoped></style>
