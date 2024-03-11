// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTyTLo_wP1vRNC5nHjPB-MuGvP0ywTekI",
  authDomain: "food-romana.firebaseapp.com",
  projectId: "food-romana",
  storageBucket: "food-romana.appspot.com",
  messagingSenderId: "909914394206",
  appId: "1:909914394206:web:b52130049f38edf0656ecf",
  measurementId: "G-S1LZPE5SJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);