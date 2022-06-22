<template>
  <div class="container d-flex">
    <div v-if="user">
      <h1>Wellcome {{ user.displayName }}</h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const store = useStore();
    const { getUser } = useUser();
    const { user } = getUser();
    store.commit("setDisplayname", user.value.uid);
    store.commit("setCartforUser", user.value.uid);
    return { user };
  },
};
</script>

<style></style>
