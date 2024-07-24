import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZlusSYFEpRu_q6vq0PEp5iHkUMuwlOUM",
  authDomain: "reserva-espacios-de-trab-894d4.firebaseapp.com",
  projectId: "reserva-espacios-de-trab-894d4",
  storageBucket: "reserva-espacios-de-trab-894d4.appspot.com",
  messagingSenderId: "146258041781",
  appId: "1:146258041781:web:e85e98da10c26d078ad7fc"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );