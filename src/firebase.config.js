
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4EVcWFPVXqdzQ743ixHxtKaviADC9gQ",
  authDomain: "cakedemo02.firebaseapp.com",
  projectId: "cakedemo02",
  storageBucket: "cakedemo02.appspot.com",
  messagingSenderId: "141958032691",
  appId: "1:141958032691:web:53236b0b9c16d6aa9ee246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app