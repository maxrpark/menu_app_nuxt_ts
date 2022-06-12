<template>
  <Html>
    <Head>
      <!-- <Title>Menu App</Title> -->
      <Meta name="description" content="The best Menu App"></Meta>
    </Head>
  </Html>
  <div>
    <Nabvar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
getCollection('tables');
</script>

<style scoped></style>
