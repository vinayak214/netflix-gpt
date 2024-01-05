// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFfHVB0r0lVdpiar9yZIpIk2cRhgcIVts",
  authDomain: "netflixgpt-5e74d.firebaseapp.com",
  projectId: "netflixgpt-5e74d",
  storageBucket: "netflixgpt-5e74d.appspot.com",
  messagingSenderId: "1082331572011",
  appId: "1:1082331572011:web:3d4b3108ceaf6067d7876e",
  measurementId: "G-YPSV3BXB21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
