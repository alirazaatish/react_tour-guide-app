// Importing Firebase v9+ SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, 
           createUserWithEmailAndPassword, 
           signInWithEmailAndPassword, 
           onAuthStateChanged,
           signOut } 
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgPH4GtWHTmSX3_wgqJNfa_3qo6E75Yw0",
    authDomain: "tour-app-bf752.firebaseapp.com",
    projectId: "tour-app-bf752",
    storageBucket: "tour-app-bf752.appspot.com", 
    messagingSenderId: "717538354757",
    appId: "1:717538354757:web:ab76bc1c97f921e85b252c",
    measurementId: "G-6S2MKHJBEM"
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, db, storage, collection, addDoc, getDocs };
