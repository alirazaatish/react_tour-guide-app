  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { getAuth,
           createUserWithEmailAndPassword,
           signInWithEmailAndPassword,
           onAuthStateChanged,

   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase/auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCgPH4GtWHTmSX3_wgqJNfa_3qo6E75Yw0",
    authDomain: "tour-app-bf752.firebaseapp.com",
    projectId: "tour-app-bf752",
    storageBucket: "tour-app-bf752.firebasestorage.app",
    messagingSenderId: "717538354757",
    appId: "1:717538354757:web:ab76bc1c97f921e85b252c",
    measurementId: "G-6S2MKHJBEM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);



  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }