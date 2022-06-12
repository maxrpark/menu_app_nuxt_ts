<template>
  <section class="container d-flex align-items-center">
    <form @submit.prevent="" class="form mx-auto shadow p-3">
      <h2 class="text-center">Login</h2>
      <div class="form-group">
        <label class="text-center d-block m-3" for="exampleInputEmail1"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label class="text-center d-block m-2" for="exampleInputPassword1"
          >Password</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Your passworld"
          v-model="password"
        />
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button @click="handleClick" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <div v-for="error in errorMessages" :key="error">
        <p class="text-center text-danger">
          {{ error }}
        </p>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useLogin } from '../composables/useAuth';
const { login, error, isPending, user } = useLogin();

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const errorMessages = ref<string[]>([]);
const handleClick = async () => {
  errorMessages.value = [];
  if (!email.value || email.value.trim() == '') {
    errorMessages.value.push('Please enter valid email');
  }
  if (!password.value || password.value.trim() == '') {
    errorMessages.value.push('Please enter valid password');
  } else if (
    //fix
    password.value &&
    password.value.trim() != '' &&
    email.value &&
    email.value.trim() != ''
  ) {
    await login(email.value, password.value);
    if (!error.value) {
      router.push('/manager');
    } else {
      errorMessage.value = error.value;
      errorMessages.value.push(error.value);
    }
  }

  setTimeout(() => {
    errorMessages.value = [];
  }, 3000);
  // await login(email.value, password.value);
  // if (!error.value) {
  //   router.push('/manager');
  // } else {
  //   errorMessage.value = error.value;
  //   setTimeout(() => {
  //     errorMessage.value = '';
  //   }, 3000);
  // }
};
</script>

<style scoped>
.container {
  height: calc(100vh - 190px);
}
.form {
  width: 100%;
  max-width: 500px;
}
</style>
