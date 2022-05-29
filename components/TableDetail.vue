<template>
  <div>
    <h2>Table information</h2>
    <h2>Table: {{ table.name }}</h2>
    <h2>Number of guest:{{ table.number_of_guests }}</h2>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { TableInterface } from '../ts/interfaces/globalInterfaces';
interface Props {
  table: TableInterface;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
