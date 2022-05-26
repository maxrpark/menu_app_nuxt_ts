<template>
  <div v-if="!isLoading">
    <TableDetail :table="documents[0]" />
    <TableOrdersDetails :orders="documents[0].order" />
    <h1>Total: ${{ documents[0].total_amount }}</h1>
    <MenuItems />
  </div>
  <div v-else>loading</div>
</template>

<script setup="" lang="ts">
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
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
    (acc: number, item: TableInterface) => {
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
