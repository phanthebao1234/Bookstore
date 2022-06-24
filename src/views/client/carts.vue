<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quality</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in carts" :key="item">
          <td>{{ index + 1 }}.{{ item.cartArrays.name }}</td>
          <td>
            <img :src="item.cartArrays.image" alt="" style="width: 75px" />
          </td>
          <td>
            {{ item.cartArrays.price }}
          </td>
          <td>
            <input type="number" :value="item.cartArrays.soluongmua" />
            Còn {{ item.cartArrays.quality }} sản phẩm trong kho
          </td>
          <td>
            <button @click="deleteItem(item.id, index)">Delete</button>
            <button
              @click="
                updateItem(
                  item.cartArrays.id,
                  item.cartArrays.quantity,
                  item.cartArrays.soluongmua
                )
              "
            >
              Update
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h3>Tổng tiền: {{ total }}</h3>
    <button @click="thanhtoan">Thanh toán</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { usegetToCart } from "@/composables/getToCart";
import { useAddToCart } from "@/composables/addToCart";
import { useOrder } from "@/composables/order";
export default {
  setup() {
    const store = useStore();
    const { data } = usegetToCart();
    const { deleteCart, updateCart } = useAddToCart();
    const { addToOrder } = useOrder();
    store.dispatch("setCart", { data: data });
    const cart = store.state.carts;
    console.log(cart);

    async function thanhtoan() {
      console.log(store.state.cartOfUser, store.state.displayname);
      await addToOrder(store.state.displayname, store.state.cartOfUser)
        .then(() => {
          alert("Thanh toán thành công");
        })
        .catch((error) => {
          alert("Thanh toán thất bại", error);
        });

      store.state.cartOfUser.forEach((ele) => {
        console.log(ele.id);
        deleteCart(ele.id);
        store.commit("deleteAll");
      });
    }

    async function deleteItem(id, index) {
      store.commit("deleteItemCartUser", index);
      await deleteCart(id)
        .then(() => {
          alert("Cart deleted");
        })
        .catch(() => alert("Cart not deleted"));
    }

    async function updateItem(data, quantity, soluongmua) {
      await updateCart(data, quantity, soluongmua)
        .then(() => alert("Cart updated"))
        .catch(() => alert("Cart not updated"));
    }
    return {
      cart,
      carts: computed(() => store.state.cartOfUser),
      deleteItem,
      updateItem,
      thanhtoan,
      total: computed(() =>
        store.state.cartOfUser.reduce((result, product) => {
          result += Number(product.cartArrays.price);
          return result;
        }, 0)
      ),
    };
  },
};
</script>

<style></style>
