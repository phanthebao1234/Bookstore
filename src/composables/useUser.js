import { ref } from "vue";
import { app } from "@/configs/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const user = ref(auth.currentUser);
console.log(app);
onAuthStateChanged(auth, (_user) => {
  if (_user) {
    user.value = _user;
  }
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
