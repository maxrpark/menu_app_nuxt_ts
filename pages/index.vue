<template>
  <div>
    <div class="container" v-show="!isLoading">
      <Hero :props="heroInfo" />
      <div
        @click="handleTableClick(table)"
        v-for="table in documents"
        :key="table.id"
        :class="`${table && table.available ? 'available' : 'not-available'}`"
      >
        {{ table.name }} ||
        <span v-if="table.available">
          {{ 'available' }}
        </span>
        <span else>
          {{ 'no available' }}
        </span>
      </div>
      <div class="table-info" v-if="selectedTable.name">
        <h2>{{ selectedTable.name }}</h2>
        <form>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="tableInformation.numberOfPersons"
          >
            <option
              v-for="(seat, idx) in selectedTable.number_of_seats"
              :key="idx"
            >
              {{ seat }}
            </option>
          </select>
          <button @click.prevent="handleSubmit" type="submit">
            Confirm table and guest
          </button>
        </form>
        Number of guest: {{ tableInformation.numberOfPersons }}
      </div>
      <RestaurantOwnerTablesControl :documents="documents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableInterface } from '../ts/interfaces/globalInterfaces';
import { db } from '../firebase/config';
import { doc, addDoc, collection, updateDoc } from 'firebase/firestore';
let router = useRouter();

// get collection
const { documents, isLoading } = getCollection('tables');

let heroInfo = reactive({
  title: 'Menu App!',
  text: 'Welcome to you best restaurant app',
});

let tableInformation = reactive({
  numberOfPersons: '',
});
let selectedTable = ref({} as TableInterface);

// methods
const handleTableClick = (table: TableInterface) => {
  if (table.available) selectedTable.value = table;
};

const handleSubmit = () => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', selectedTable.value.id);
  if (+tableInformation.numberOfPersons > 0) {
    updateDoc(docRef, {
      available: !selectedTable.value.available,
      number_of_guests: parseInt(tableInformation.numberOfPersons),
    });
    router.push({
      path: `/table/${selectedTable.value.id}`,
    });
  } else {
    console.log('please select number of guess');
  }
};
</script>

<style scoped>
.available {
  background: green;
}
.not-available {
  background: red;
}
</style>
