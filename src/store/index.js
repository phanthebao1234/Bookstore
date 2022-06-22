import { createStore } from "vuex";
// import { app, database } from "@/configs/firebase";
// import { getDocs } from "firebase/firestore";
export default createStore({
  state() {
    return {
      isStatusLogin: false,
      products: [],
      carts: [],
      details: [],
      searchString: null,
      userId: "",
      cartOfUser: [],
      admin: false,
    };
  },
  getters: {},
  mutations: {
    countTotal(state) {
      state.cartOfUser.reduce((total, current) => {
        total += current.cartArrays.price;
        return total;
      }, 0);
    },
    setProducts(state, productsPayload) {
      state.products = productsPayload;
    },
    setCart(state, cartPayload) {
      state.carts = cartPayload;
    },
    setCartforUser(state, userPayload) {
      const cart = [];
      // console.log("setCartforUser");
      // console.log(state.carts.userId);
      for (let i = 0; i < state.carts.length; i++) {
        console.log(state.carts[i].userId);
        if (state.carts[i].userId == userPayload) {
          // console.log("userPayload");
          cart.push(state.carts[i]);
          state.cartOfUser = cart;
        }
      }
    },
    updateCart(state, cartPayload) {
      const index = state.carts.indexOf(cartPayload);
      state.carts.splice(index, 1);
    },
    setDetails(state, detailPayload) {
      state.details = detailPayload;
    },
    search(state, productsPayload) {
      const srcArray = [];
      if (productsPayload.length > 0) {
        this.state.products.forEach((ele) => {
          if (ele.name == productsPayload) {
            srcArray.push(ele);
          }
          console.log(productsPayload);
        });
        state.products = srcArray;
      } else {
        return state.products;
      }
    },
    setDisplayname(state, displaynamePayload) {
      state.displayname = displaynamePayload;
    },
    deleteItemCartUser(state, index) {
      console.log("deleteItemCartUser");
      state.cartOfUser.splice(index, 1);
    },
    deleteAll(state) {
      state.cartOfUser = [];
    },
  },
  actions: {
    setProducts({ commit }, { data }) {
      commit("setProducts", data);
    },
    setProductArray({ commit }, { data }) {
      console.log(data);
      commit("setProducts", data);
    },
    setCartArray({ commit }, { data }) {
      commit("setCart", data);
    },
    deleteCart({ commit }, { data }) {
      commit("updateCart", data);
    },
    getDetail({ commit }, { id }) {
      for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].id == id) {
          const data = this.state.products[i];
          commit("setDetails", data);
        }
      }
      // if (this.state.products[id] == id) {
      //   commit("getDetails", id);
      // }
    },
    setSachkynang({ commit }, { data }) {
      commit("sortSachKyNang", data);
    },
    search({ commit }, { data }) {
      commit("search", data);
    },
    setCart({ commit }, { data }) {
      commit("setCart", data);
    },
  },
  modules: {},
});
