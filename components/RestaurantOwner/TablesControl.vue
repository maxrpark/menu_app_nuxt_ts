<template>
  <section v-if="tables" class="shadow p-3">
    <h2>Tables</h2>
    <div
      v-for="table in tables"
      :key="table.id"
      :class="`${table.available ? 'bg-success' : 'bg-danger'}`"
      class="d-flex justify-content-between align-items-center my-3 total-amount p-2"
    >
      <p class="m-0 text-capitalize text-light">
        {{ table.name }}
      </p>
      <div class="buttons">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            @click="store.table_check_out = false"
          >
            Options
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-if="!table.available">
              <button
                @click="store.MANAGER_TABLE_DETAILS(table.id)"
                class="dropdown-item"
              >
                Tables details
              </button>
            </li>
            <li>
              <!-- <li v-if="table.total_amount === 0"> -->
              <button
                @click="$emit('reserveOrClearTable', table)"
                class="dropdown-item"
              >
                {{ table.available ? 'Reserve' : 'Clear' }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '@/store/restaurant';
const store = useRestaurantStore();

interface PropsInt {
  tables: TableInterface[];
}
const props = defineProps<PropsInt>();

const emit = defineEmits(['reserveOrClearTable']);
</script>

<style scoped></style>
