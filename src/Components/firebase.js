// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRlAwriVq_8elrSRnOtZTJcwu_tGVECw",
  authDomain: "eziana-40455.firebaseapp.com",
  projectId: "eziana-40455",
  storageBucket: "eziana-40455.appspot.com",
  messagingSenderId: "245498184843",
  appId: "1:245498184843:web:5bfd6bc915660e4c85808e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 var db =app.firestore();
export{app,db};