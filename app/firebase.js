import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtgCzI6HTo0ytijoOl_EyHAJK1z7aAv6g",
    authDomain: "fir-app-db3df.firebaseapp.com",
    projectId: "fir-app-db3df",
    storageBucket: "fir-app-db3df.appspot.com",
    messagingSenderId: "325800350182",
    appId: "1:325800350182:web:323449f28b083af9008627"
  };

  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);