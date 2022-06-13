<template>
  <div class="container" v-if="restaurantStore.filtered_menu.length">
    <TableHero />
    <div>
      <TableFiltersOptions />
      <MenuItems />
    </div>
    <Toast />
  </div>
  <Spinner v-else />
</template>

<script setup="" lang="ts">
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
import {
  TableInterface,
  OrderInterface,
} from '../../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '~~/store/restaurant';

onMounted(() => {
  window.scrollTo(0, 0);
});

let restaurantStore = useRestaurantStore();

if (!restaurantStore.tables.length) {
  restaurantStore.FETCH_MENU_ITEMS();
}

let pageRoute = useRoute();

getCollection('tables', ['id', '==', pageRoute.params.tableID]);

watch(
  () => restaurantStore.custumerTable,
  (d: TableInterface) => {
    // @ts-ignore: Unreachable code error
    const docRef = doc(db, 'tables', pageRoute.params.tableID);
    restaurantStore.custumerTable.total_amount =
      restaurantStore.custumerTable.order.reduce(
        (acc: number, item: OrderInterface) => {
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
