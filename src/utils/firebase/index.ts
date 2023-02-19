import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAErf8JpjXifzfm34UdEZ0V0rXlXZjMKG4",
  authDomain: "ylog-8b3ff.firebaseapp.com",
  projectId: "ylog-8b3ff",
  storageBucket: "ylog-8b3ff.appspot.com",
  messagingSenderId: "395189903028",
  appId: "1:395189903028:web:668ee5f70563153441c1e1",
  measurementId: "G-WJ0DGP8Q7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
