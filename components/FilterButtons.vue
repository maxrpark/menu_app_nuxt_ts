<template>
  <ul class="nav nav-pills d-flex justify-content-center">
    <li
      class="nav-item"
      @click="store.filterMenu(optionFilter, typeItem)"
      v-for="typeItem in types"
      :key="typeItem"
    >
      <p
        class="nav-link d-flex align-items-center m-0"
        :class="[typeItem === selectedType ? 'active' : '']"
      >
        {{ typeItem }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '../store/restaurant';
interface Props {
  optionFilter: string;
  types: Array<string>;
  selectedType: string;
}

const props = defineProps<Props>();
let store = useRestaurantStore();
</script>

<style scoped></style>
