<template>
  <div class="container my-5 register">
    <form class="form" @submit.prevent="onSubmit">
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
        Sign In
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
import { useSignIn } from "@/composables/useSignIn";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signin } = useSignIn();
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) router.push({ name: "profile", params: {} });
    }
    return { email, password, error, isPending, onSubmit };
  },
};
</script>

<style></style>
