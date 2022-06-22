import { ref } from "vue";
import { app } from "@/configs/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  error.value = null;
  try {
    isPending.value = true;
    const auth = getAuth();
    console.log("auth", auth);
    console.log("app", app);
    await createUserWithEmailAndPassword(auth, email, password, fullName)
      .then((res) => {
        updateProfile(res.user, { displayName: fullName });
        console.log(res.user);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        throw new Error("Could not create user");
      });
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
