<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide py-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(table, index) in restaurantStore.tables"
        :key="index"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="`${index}`"
        :class="index === 0 ? 'active' : ''"
        :aria-current="index === 0 ? 'true' : 'false'"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(table, index) in restaurantStore.tables"
        :key="index"
        :class="{ active: index === 0 }"
        class="carousel-item"
      >
        <img
          :src="table.image"
          style="height: 450px"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ table.name }}</h5>
          <p>{{ table.desc }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon bg-dark"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon bg-dark"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRestaurantStore } from '~~/store/restaurant';
let restaurantStore = useRestaurantStore();
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
