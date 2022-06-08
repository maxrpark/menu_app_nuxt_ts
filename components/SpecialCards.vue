<template>
  <div
    class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
    :style="{ backgroundImage: 'url(' + table.image + ')' }"
  >
    <div class="bg"></div>
    <div
      style="height: 250px"
      class="d-flex flex-column px-5 pb-3 text-white text-shadow-1 content"
    >
      <h2 class="pt-5 mt-5 display-6 lh-1 fw-bold text-center">
        {{ table.name }}
      </h2>

      <ul
        class="d-flex align-items-betwend justify-content-end badge position-absolute bottom-0"
      >
        <li
          class="p-2 d-flex align-items-center p-2 rounded m-2"
          :class="`${table.available ? 'bg-success' : 'bg-danger'}`"
        >
          <small>{{ isAvailableOrNot }}</small>
        </li>
        <li
          class="d-flex align-items-center p-2 rounded m-2"
          :class="`${table.available ? 'bg-success' : 'bg-danger'}`"
        >
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
.content {
  z-index: 1;
}
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(66, 58, 58, 0.3);
  opacity: 1;
}

.card {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.badge {
  right: 0;
}
</style>
