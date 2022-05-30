<template>
  <div>
    <div class="container my-5">
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">
            Border hero with cropped image and shadows
          </h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Call Waiter
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Ask for bill
            </button>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src="bootstrap-docs.png"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>

    <TableDetail :table="restaurantStore.custumerTable" />
    <TableOrdersDetails
      v-if="restaurantStore.custumerTable.order"
      :orders="restaurantStore.custumerTable.order"
    />
    <h1>Total: ${{ restaurantStore.custumerTable.total_amount }}</h1>
    <FiltersOptions />
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
