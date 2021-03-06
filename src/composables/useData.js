import { ref } from "vue";
import { app, database } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore";

const error = ref(null);
const data = [];
console.log("app:", app);
const collectionRef = collection(database, "products");

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

export function useGetData() {
  return { error, getData, data };
}

// onSnapshot(collectionRef, (data) => {
//   data.docs.map((item) => {
//     return data.push({ ...item.data(), id: item.id });
//   });
// });

// getDocs(collectionRef)
//     .then((response) => {
//       response.docs.map((doc) => {
//         data.push({ ...doc.data(), id: doc.id });
//         return data;
//       });
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
