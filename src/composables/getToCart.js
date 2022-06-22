import { ref } from "vue";
import { app, database } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore";

const error = ref(null);
const data = [];
console.log("app:", app);
const collectionRef = collection(database, "cart");

async function getToCart() {
  getDocs(collectionRef)
    .then((response) => {
      response.docs.map((doc) => {
        data.push({ ...doc.data(), id: doc.id });
        return data;
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getToCart();

export function usegetToCart() {
  return { error, getToCart, data };
}

// onSnapshot(collectionRef, (data) => {
//   console.log(
//     data.docs.map((item) => {
//       return item.data();
//     })
//   );
// });
