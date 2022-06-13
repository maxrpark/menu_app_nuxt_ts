<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-md">
      <NuxtLink class="navbar-brand" to="/">Menu App</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        :aria-expanded="expand"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 nav-lg w-100 justify-content-end"
        >
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li v-if="!store.user" class="nav-item">
            <NuxtLink class="nav-link text-danger" to="/login"
              >Manager</NuxtLink
            >
          </li>
          <li v-else class="nav-item">
            <NuxtLink class="nav-link text-success" to="/manager"
              >Manager</NuxtLink
            >
          </li>

          <li v-if="isManagerPage" @click="logOutUser" class="nav-item">
            <span class="nav-link">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { logOutUser } from '../composables/useAuth';
import { useRestaurantStore } from '~~/store/restaurant';

let store = useRestaurantStore();
let expand = ref(false);
const route = useRoute();

let isManagerPage = computed(() => {
  if (store.user && route.path === '/manager') {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>
