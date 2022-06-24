<template>
  <div class="container">
    <h2>Thêm sản phẩm</h2>
    <form class="row g-3" @submit.prevent="onSubmit">
      <div class="col-md-6">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="author" class="form-label">Tác giả</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="author"
          required
        />
      </div>
      <div class="col-12">
        <label for="image" class="form-label">Hình ảnh</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="https://images.example.com"
          v-model="image"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="nhaxuatban" class="form-label">Nhà xuất bản</label>
        <input
          type="text"
          class="form-control"
          id="nhaxuatban"
          v-model="nhaxuatban"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="category" class="form-label">Thể loại</label>
        <input
          type="text"
          class="form-control"
          id="category"
          v-model="category"
          required
        />
      </div>
      <div class="col-md-2">
        <label for="hinhthuc" class="form-label">Hình thức</label>
        <input
          type="text"
          class="form-control"
          id="hinhthuc"
          v-model="hinhthuc"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="price" class="form-label">Giá bán</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="price"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="quality" class="form-label">Số lượng</label>
        <input
          type="number"
          class="form-control"
          id="quality"
          v-model="quality"
          required
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary text-center">
          Thêm sản phẩm
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useProductsAdmin } from "@/composables/productAdmin";
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const author = ref("");
    const image = ref("");
    const category = ref("");
    const nhaxuatban = ref("");
    const hinhthuc = ref("");
    const price = ref(0);
    const quality = ref(0);
    console.log(name.value);

    const { addData } = useProductsAdmin();
    async function onSubmit() {
      await addData(
        name.value,
        author.value,
        image.value,
        category.value,
        nhaxuatban.value,
        hinhthuc.value,
        price.value,
        quality.value
      );
      console.log(
        name.value,
        author.value,
        image.value,
        category.value,
        nhaxuatban.value,
        hinhthuc.value,
        price.value,
        quality.value
      );
    }
    return {
      onSubmit,
      name,
      author,
      image,
      category,
      nhaxuatban,
      hinhthuc,
      price,
      quality,
    };
  },
};
</script>

<style></style>
