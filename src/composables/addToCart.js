import { app, database } from "@/configs/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

// const category = ref(null);
// const name = ref(null);
// const image = ref(null);
// const likeCount = ref(null);
// const nhaxuatban = ref(null);
// const price = ref(null);
// const soluongmua = ref(null);
// const quantity = ref(null);
// const tacgia = ref(null);
// const total = ref(null);
const collectionRef = collection(database, "cart");

async function addToCart(userId, data) {
  console.log(app);
  addDoc(collectionRef, {
    userId: userId,
    cartArrays: data,
  });
}

async function deleteCart(id) {
  console.log(id);
  const deleteItem = doc(database, "cart", id);
  deleteDoc(deleteItem);
}

async function updateCart(data, quantity, soluongmua) {
  const docToUpdate = doc(database, "cart", data);
  updateCart(docToUpdate, {
    cartArrays: {
      quantity: quantity,
      soluongmua: soluongmua,
    },
  });
}
export function useAddToCart() {
  return { addToCart, deleteCart, updateCart };
}
