<template>
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
  >
    <div
      v-for="(item, idx) in 6"
      :key="idx"
      class="col d-flex align-items-start"
    >
      <svg
        class="bi text-muted flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlink:href="#bootstrap" />
      </svg>
      <div>
        <h4 class="fw-bold mb-0">Featured title</h4>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
