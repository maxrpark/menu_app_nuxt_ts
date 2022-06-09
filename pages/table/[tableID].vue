<template>
  <div class="container" v-if="restaurantStore.filtered_menu.length">
    <TableHero />
    <div>
      <TableFiltersOptions />
      <MenuItems />
    </div>

    <Toast />
    <button
      type="button"
      class="btn btn-primary"
      id="liveToastBtn"
      ref="liveToastBtn"
      @click="showToast"
    >
      Show live toast
    </button>
  </div>
  <Spinner v-else />
</template>

<script setup="" lang="ts">
import { db } from '../../firebase/config';
import { updateDoc, doc } from 'firebase/firestore';
import { TableInterface } from '../../ts/interfaces/globalInterfaces';
import { useRestaurantStore } from '~~/store/restaurant';

let restaurantStore = useRestaurantStore();
restaurantStore.FETCH_MENU_ITEMS();
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

// const toastTrigger = document.getElementById('liveToastBtn');

// const toastTrigger = ref(null)!;
// const toastLiveExample = ref(null)!;

const showToast = () => {
  const toastLiveExample = document.getElementById('liveToast')!;
  // @ts-ignore: Unreachable code error
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
};
</script>

<style scoped></style>
