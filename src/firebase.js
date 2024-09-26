// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyANdQN0OA_15J6WPeCfF3q7OtRki9hu6Gc",
    authDomain: "aplicacionprueba-fdf92.firebaseapp.com",
    projectId: "aplicacionprueba-fdf92",
    storageBucket: "aplicacionprueba-fdf92.appspot.com",
    messagingSenderId: "58877853427",
    appId: "1:58877853427:web:e32a6257f84edcc5280186",
    measurementId:""
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };