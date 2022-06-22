import { ref } from "vue";
import { app } from "@/configs/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
async function signin(email, password) {
  error.value = null;
  try {
    isPending.value = true;
    console.log("app", app);
    const auth = getAuth();
    console.log("auth", auth);
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user.uid);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
