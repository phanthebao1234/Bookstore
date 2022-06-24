import { ref } from "vue";
import { app, database } from "@/configs/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const error = ref(null);
const data = [];
console.log("app:", app);
const collectionRef = collection(database, "products");

async function addData(
  name,
  author,
  image,
  category,
  nhaxuatban,
  hinhthuc,
  price,
  quality
) {
  addDoc(collectionRef, {
    name: name,
    tacgia: author,
    image: image,
    category: category,
    nhaxuatban: nhaxuatban,
    hinhthuc: hinhthuc,
    price: price,
    quality: quality,
    soluongmua: 0,
    likeCount: 0,
    comments: [],
  });
}
async function getData() {
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

getData();

export function useProductsAdmin() {
  return { error, getData, addData, data };
}
