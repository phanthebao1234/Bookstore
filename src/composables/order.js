import { app, database } from "@/configs/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

const collectionRef = collection(database, "order");

async function addToOrder(userId, data) {
  console.log(app);
  addDoc(collectionRef, {
    userId: userId,
    orderArrays: data,
  });
}

async function deleteOrder(id) {
  console.log(id);
  const deleteItem = doc(database, "order", id);
  deleteDoc(deleteItem);
}

export function useOrder() {
  return { addToOrder, deleteOrder };
}
