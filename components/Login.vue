<template>
  <form @submit.prevent="">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button @click="handleClick" type="submit" class="btn btn-primary">
      Submit
    </button>
    <span v-if="error">{{ error }}</span>
  </form>
</template>

<script setup lang="ts">
import { useLogin } from '../composables/useAuth';
const { login, error, isPending, user } = useLogin();

const email = ref('');
const password = ref('');

const handleClick = async () => {
  await login(email.value, password.value);
  if (!error.value) {
  } else {
    console.log(error.value);
  }
};
</script>

<style scoped></style>
