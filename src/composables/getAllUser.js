import { ref } from "vue";
import { app } from "@/configs/firebase";
import { getAuth } from "firebase/auth";

const error = ref(null);
console.log(app);
async function listAllUsers() {
  error.value = null;
  try {
    getAuth()
      .listUsers(1000)
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
          console.log("user", userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch((error) => {
        console.log("Error listing users:", error);
      });
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
listAllUsers();
export function useGetAllUsers() {
  return { listAllUsers };
}
