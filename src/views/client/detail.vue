<template>
  <div class="container d-flex justify-content-center mt-5">
    <div v-if="details">
      <div class="row">
        <div class="col-lg-4">
          <img :src="details.image" alt="" class="image-thumb" />
        </div>
        <div class="col-lg-8">
          <h3>{{ details.name }}</h3>
          <div class="d-flex justify-content-between">
            <p>
              Nhà cung cấp:
              <span style="color: blue">{{ details.nhaxuatban }}</span>
              <br />
              Hình thức:
              <span>{{ details.hinhthuc }}</span>
            </p>
            <p>
              Tác giả:
              <span style="font-weight: bold">{{ details.tacgia }}</span>
            </p>
          </div>
          <label for="">Nhập số lượng: </label>
          <input type="number" value="1" />
          <h3 class="price">{{ details.price }} đ</h3>
          <button class="btn btn-primary addtocart" @click="addCart(details)">
            Add To Cart
          </button>
          <div class="mt-5">
            <h3>Bình luận</h3>
            <ul>
              <li>
                {{ details.comments }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useUser } from "@/composables/useUser";
import { useAddToCart } from "@/composables/addToCart";
const { getUser } = useUser();
const { user } = getUser();
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("getDetail", { id: route.params.id });
    const { addToCart } = useAddToCart();
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
    return {
      details: computed(() => store.state.details),
      addCart,
    };
  },
};
</script>

<style scoped>
.image-thumb {
  max-height: 500px;
  max-width: 100%;
  height: auto;
  width: auto;
}
.price {
  font-weight: bold;
  color: red;
}
.addtocart {
  margin-top: 30px;
}
</style>
