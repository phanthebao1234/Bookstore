<template>
  <div class="container my-5 register">
    <form class="form" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="fullname"
          placeholder="Nguyen Van A"
          v-model="fullname"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nguyenvana@gmail.com"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button v-if="!isPending" type="submit" class="btn btn-primary px-5 py-1">
        Sign Up
      </button>
      <button v-else type="button" class="btn btn-secondary px-5 py-1" disabled>
        Loading...
      </button>
    </form>

    <div class="text-danger" v-if="error">
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signup } = useSignUp();
    const router = useRouter();
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signup(email.value, password.value, fullname.value);
      if (!error.value) router.push({ name: "login", params: {} });
    }
    return { fullname, email, password, error, isPending, onSubmit };
  },
};
</script>

<style></style>
