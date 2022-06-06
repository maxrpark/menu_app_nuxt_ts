<template>
  <section class="d-flex justify-content-center align-items-center">
    <div class="modal-content bg-light p-4 m-4 container">
      <div
        @click="restaurantStore.CLOSE_MODAL"
        class="d-flex justify-content-end"
      >
        <IconsClose />
      </div>

      <div class="table-info" v-if="restaurantStore.custumerTable.name">
        <h2 class="text-center">
          Table: {{ restaurantStore.custumerTable.name }}
        </h2>
      </div>
      <ModalForm @handleSubmit="handleSubmit" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
let router = useRouter();

const handleSubmit = (numberOfPersons: string) => {
  // @ts-ignore: Unreachable code error
  const docRef = doc(db, 'tables', restaurantStore.custumerTable.id);
  if (+numberOfPersons > 0) {
    updateDoc(docRef, {
      available: !restaurantStore.custumerTable.available,
      number_of_guests: parseInt(numberOfPersons),
    });
    restaurantStore.isTableSelected = false;
    document.body.style.overflow = 'auto';
    router.push({
      path: `/table/${restaurantStore.custumerTable.id}`,
    });
  } else {
    console.log('please select number of guess');
  }
};
</script>

<style scoped>
section {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
</style>
