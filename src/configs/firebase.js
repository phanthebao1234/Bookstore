import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASD92b3zePvwEkFK3f1dqnd8Mz2WDd8yA",
  authDomain: "shopping-d1868.firebaseapp.com",
  projectId: "shopping-d1868",
  storageBucket: "shopping-d1868.appspot.com",
  messagingSenderId: "435708974844",
  appId: "1:435708974844:web:12923e9f459d831577e979",
  measurementId: "G-N9NBY2QPMZ",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
