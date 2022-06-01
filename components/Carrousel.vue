<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in 3"
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
        v-for="(item, index) in 3"
        :key="index"
        :class="{ active: index === 0 }"
        class="carousel-item"
      >
        <img
          src="https://dl.airtable.com/.attachments/670a21d137c174c6f1c20f5021b124fa/700567e1/noodleit.png?ts=1654065615&userId=usrrcv6eIF0bsu6DY&cs=41ec825beab0e620"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
