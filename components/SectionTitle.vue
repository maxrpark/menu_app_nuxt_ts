<template>
  <div class="jumbotron">
    <h1 class="display-4">{{ title }}</h1>
    <p class="lead">
      {{ text }}
    </p>
    <hr class="my-4" />
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  props: Object.assign({
    title: String,
    text: String,
  }),
});

let { title, text } = props.props;
</script>

<style scoped></style>
