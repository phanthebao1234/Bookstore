<template>
  <div class="container">
    <h1>Products</h1>
    <div class="row" v-if="products.length > 0">
      <div class="col-lg-3">
        <div class="input-group mb-3">
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Tìm kiếm"
            v-model="searchString"
          />
        </div>
        <h1>Nhóm sản phẩm</h1>
        <div class="list-group">
          <li
            class="list-group-item list-group-item-action"
            @click="sachkynang"
          >
            Sách Kỹ năng sống
          </li>
          <li class="list-group-item list-group-item-action" @click="sachtamly">
            Sách Tâm Lý
          </li>
          <li
            class="list-group-item list-group-item-action"
            @click="sachgiaokhoa"
          >
            Sách Giáo Khoa
          </li>
          <li
            class="list-group-item list-group-item-action"
            @click="sachtruyentranh"
          >
            Truyện Tranh
          </li>
          <li
            class="list-group-item list-group-item-action"
            @click="sachtienganh"
          >
            Sách Tiếng Anh
          </li>
          <li class="list-group-item list-group-item-action" @click="tatca">
            Tất cả
          </li>
        </div>
      </div>
      <div class="col-lg-9 border">
        <div style="width: 200px">
          Sắp xếp theo:
          <select class="form-select">
            <option value="0">Giá từ cao đến thấp</option>
            <option value="1">Giá từ thấp đến cao</option>
          </select>
        </div>
        <div class="row">
          <div v-for="item in products" :key="item.name" class="col-sm-3">
            <div class="card border-0">
              <div class="card-body">
                <router-link
                  :to="{
                    name: 'detail',
                    params: { id: item.id },
                  }"
                >
                  <img :src="item.image" alt="" class="img-thum" />
                  <h3 class="title">
                    {{ item.name }}
                  </h3>
                </router-link>
                <p class="card-text">
                  Giá:
                  <span style="color: red, font-weight: bold">
                    {{ item.price }} đ</span
                  >
                </p>
                <button class="card-text" @click="increaseLike">
                  Số lượt thích {{ item.likeCount }}
                </button>
                <a href="#" class="btn btn-primary" @click="addCart(item)"
                  >Add to Cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useUser } from "@/composables/useUser";
import { useGetData } from "@/composables/useData";
import { useAddToCart } from "@/composables/addToCart";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const { data } = useGetData();
    const { addToCart } = useAddToCart();
    const { getUser } = useUser();
    const { user } = getUser();
    console.log(user);
    var searchString = ref("");
    // const products = computed(()=> store.state.products)

    //Phuong thuc search
    // function filtersName() {
    //   var listproducts = [];
    //   var name = searchString.value;
    //   if(!name || name ==="") {
    //     return products;
    //   }
    // }

    store.dispatch("setProducts", { data: data });

    async function addCart(item) {
      await addToCart(user.value.uid, item)
        .then(() => {
          alert("Add to cart");
          let cartArrays = {};
          cartArrays = item;
          let userId = user.value.uid;
          store.state.cartOfUser.push({ cartArrays, userId });
          // store.commit("setCartforUser", user.value.uid);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // function addToCart(item) {
    //   store.dispatch("setCartArray", { data: item });
    // }
    console.log(store.getters.filterCat("sachtamly"));
    function sachkynang() {
      store.dispatch("setSachkynang", { data: "sachkynang" });
    }
    return {
      searchString,
      data,
      addCart,
      sachkynang,
      products: computed(() => store.state.products),
    };
  },
  data() {
    return {
      listdrink: [],
      // searchString: "",
    };
  },
  computed: {
    fileterName() {
      var listdrink = [];
      // case 1: nếu người dùng ko gõ vào tìm kiếm thì trả về là drinks
      var ten = this.searchString; //COFFEE
      console.log(ten);
      if (!ten || ten === "") {
        return this.products;
      }
      // case 2: có tìm kiếm, thì phỉa đổi gái trị tìm kiếm về chữ hoa hoặc chữ thường
      ten = ten.trim().toLowerCase(); //milk
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].name.includes(ten)) {
          listdrink.push(this.products[i]);
          // return this.products[i];
        }
      }
      return listdrink;
    },
  },
};
</script>

<style>
.img-thum {
  width: 190px;
}
.title {
  text-decoration: none;
  font-size: 24px;
}
</style>
