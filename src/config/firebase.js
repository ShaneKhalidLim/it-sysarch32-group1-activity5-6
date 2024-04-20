// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGhuKC9ssjQmwpO0kiELMhvifeGjmFXG4",
  authDomain: "it-sysarch32-group1.firebaseapp.com",
  projectId: "it-sysarch32-group1",
  storageBucket: "it-sysarch32-group1.appspot.com",
  messagingSenderId: "59320166000",
  appId: "1:59320166000:web:1b03eaf645df3fe129b6b5",
  measurementId: "G-HSLZDQJZGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();