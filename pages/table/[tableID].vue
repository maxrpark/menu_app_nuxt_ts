<template>
  <div class="container" v-if="restaurantStore.filtered_menu.length">
    <TableHero />
    <div>
      <TableFiltersOptions />
      <MenuItems />
    </div>

    <!-- <button type="button" class="btn btn-primary" id="liveToastBtn">
      Show live toast
    </button>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div> -->
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
// const toastLiveExample = document.getElementById('liveToast');
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', () => {
//     const toast = new bootstrap.Toast(toastLiveExample);

//     toast.show();
//   });
// }
</script>

<style scoped></style>
