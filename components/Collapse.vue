<template>
  <div>
    <p>
      <button
        class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${identifier}`"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {{ text }}
      </button>
    </p>
    <div class="collapse" :id="identifier">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  identifier: string;
  text: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
