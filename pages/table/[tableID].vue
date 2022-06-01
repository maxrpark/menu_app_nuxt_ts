<template>
  <div>
    <TableHero />
    <TableDetail />
    <TableOrdersDetails />
    <h1>Total: ${{ restaurantStore.custumerTable.total_amount }}</h1>
    <TableFiltersOptions />
    <MenuItems />
  </div>
</template>

<script setup="" lang="ts">
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
let pageRoute = useRoute();
getCollection('tables', ['id', '==', pageRoute.params.tableID]);

watch(
  () => restaurantStore.custumerTable,
  (d: any) => {
    // @ts-ignore: Unreachable code error
    const docRef = doc(db, 'tables', pageRoute.params.tableID);
    restaurantStore.custumerTable.total_amount =
      restaurantStore.custumerTable.order.reduce(
        (acc: number, item: TableInterface) => {
          return acc + item.total;
        },
        0
      );

    updateDoc(docRef, {
      total_amount: restaurantStore.custumerTable.total_amount,
    });
  }
);
</script>

<style scoped></style>
