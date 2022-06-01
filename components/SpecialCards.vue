<template>
  <div
    class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
    :style="{ backgroundImage: 'url(' + table.image + ')' }"
  >
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ table.name }}</h2>

      <ul class="d-flex align-items-betwend justify-content-end">
        <li class="p-2 d-flex align-items-center">
          <small
            :class="`${table.available ? 'available' : 'not-available'}`"
            >{{ isAvailableOrNot }}</small
          >
        </li>
        <li class="d-flex align-items-center">
          <small>Guess: {{ table.number_of_seats }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableInterface } from '../ts/interfaces/globalInterfaces';

interface Props {
  table: TableInterface;
}

const props = defineProps<Props>();

let isAvailableOrNot = computed(() => {
  if (props.table.available) {
    return 'Available';
  }
  return 'Not Available';
});
</script>

<style scoped>
.available {
  color: green;
}
.not-available {
  color: red;
}
.card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
