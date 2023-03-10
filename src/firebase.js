import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCE6J9UeOzn6fTs9364ELbLwR9_OsGLOko",
    authDomain: "jesmin-c7fd4.firebaseapp.com",
    projectId: "jesmin-c7fd4",
    storageBucket: "jesmin-c7fd4.appspot.com",
    messagingSenderId: "350872123530",
    appId: "1:350872123530:web:d9a6c35209d07cee89d573",
    measurementId: "G-JNJFZ3PBRL"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
