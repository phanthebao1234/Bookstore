<template>
  <h1>This is my product admin</h1>
</template>

<script>
import { useStore } from "vuex";
export default {
  created() {
    const store = useStore();
    store.state.admin = true;
  },
};
</script>

<style></style>
