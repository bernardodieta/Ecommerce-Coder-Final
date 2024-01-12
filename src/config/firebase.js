

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4cvntn_Ua8iDX-Wi6ePgJumm-Bmu3Dcc",
  authDomain: "ecommer-react-7ed60.firebaseapp.com",
  projectId: "ecommer-react-7ed60",
  storageBucket: "ecommer-react-7ed60.appspot.com",
  messagingSenderId: "575650734272",
  appId: "1:575650734272:web:622e00460bb8ae865b0d25",
 
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);