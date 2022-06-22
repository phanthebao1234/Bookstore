import { ref } from "vue";
import { app } from "@/configs/firebase";
import { getAuth, signOut } from "firebase/auth";

const error = ref(null);

async function signout() {
  error.value = null;
  try {
    const auth = getAuth();
    console.log("app", app);
    await signOut(auth);
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
export function useSignOut() {
  return { error, signout };
}
