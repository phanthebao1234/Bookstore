<template>
  <div class="user">
    <h1>Helvetica</h1>
  </div>
</template>

<script>
import { useGetAllUsers } from "@/composables/getAllUser";
export default {
  setup() {
    const { listAllUsers } = useGetAllUsers();

    return {
      listAllUsers,
    };
  },
};
</script>

<style></style>
