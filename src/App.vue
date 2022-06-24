<template>
  <NavbarAdmin v-if="isAdmin" />
  <NavbarComponent v-else />

  <router-view />

  <FooterComponent />
</template>
<script>
import NavbarComponent from "./components/navbar.vue";
import FooterComponent from "./components/footer.vue";
import NavbarAdmin from "./components/navbaradmin.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useGetData } from "@/composables/useData";
import { usegetToCart } from "@/composables/getToCart";
import { useUser } from "@/composables/useUser";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
    NavbarAdmin,
  },
  // data() {
  //   return {

  //   };
  // },
  created() {
    const store = useStore();
    {
      //Get dữ liệu products từ firebase
      const { data } = useGetData();
      store.dispatch("setProducts", { data: data });
    }

    //Get dữ liệu cart từ firebase
    const { data } = usegetToCart();
    store.dispatch("setCart", { data: data });

    //Get dữ liệu user
    const { getUser } = useUser();
    const { user } = getUser();
    // store.commit("setDisplayname", user.value.uid);
    // store.commit("setCartforUser", user.value.uid);
    console.log("user id:", user.value);

    //Kiểm tra admin
    // const isAdmin = store.state.admin;

    return {
      // isAdmin,
      isAdmin: computed(() => store.state.isAdmin),
      products: computed(() => store.state.products),
      carts: computed(() => store.state.cartOfUser),
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
