// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Your Firebase configuration

import firebaseConfig from 'firebaseConfig';
import 'firebase/firestore';

const database = getDatabase(app);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdQN0OA_15J6WPeCfF3q7OtRki9hu6Gc",
  authDomain: "aplicacionprueba-fdf92.firebaseapp.com",
  projectId: "aplicacionprueba-fdf92",
  storageBucket: "aplicacionprueba-fdf92.appspot.com",
  messagingSenderId: "58877853427",
  appId: "1:58877853427:web:e32a6257f84edcc5280186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app