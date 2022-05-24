<template>
  <div v-if="!isLoading">
    <!-- <div class="card-group"> -->
    <MenuItems />
    <TableDetail :table="documents[0]" />
    <div v-if="documents.length">
      <h2>My Order</h2>
      <div v-for="item in documents[0].order" :key="item.id">
        {{ item.comida }}
        {{ item.price }}
        {{ item.amount }}
      </div>
    </div>
    <h1>Total: ${{ documents[0].total_amount }}</h1>
  </div>
  <div v-else>loading</div>
</template>

<script setup="" lang="ts">
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
let pageRoute = useRoute();

const { documents, isLoading } = getCollection('tables', [
  'id',
  '==',
  pageRoute.params.tableID,
]);

watch(documents, (d: any) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', pageRoute.params.tableID);
  documents._rawValue[0].total_amount = documents._rawValue[0].order.reduce(
    (acc: number, item: any) => {
      return acc + item.total;
    },
    0
  );

  updateDoc(docRef, {
    total_amount: documents._rawValue[0].total_amount,
  });
});
</script>

<style scoped></style>
