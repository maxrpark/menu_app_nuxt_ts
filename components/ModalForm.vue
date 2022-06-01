<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlSelect1"> Select number of guest: </label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        v-model="numberOfPersons"
      >
        <option
          class="text-center"
          v-for="(seat, idx) in store.selectedTable.number_of_seats"
          :key="idx"
        >
          {{ seat }}
        </option>
      </select>
      <h4 class="text-center m-4">Number of guest: {{ numberOfPersons }}</h4>
      <div class="d-flex justify-content-center">
        <button
          class="text-center btn btn-primary m-auto"
          @click.prevent="$emit('handleSubmit', numberOfPersons)"
          type="submit"
        >
          Confirm table and guest
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let store = useRestaurantStore();
const emit = defineEmits(['handleSubmit']);
let numberOfPersons = ref('');
</script>

<style scoped></style>
