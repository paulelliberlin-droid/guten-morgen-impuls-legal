import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKFs236cD1I41d5SbYNus7tHFxxnvIGic",
  authDomain: "guten-morgen-impulse.firebaseapp.com",
  projectId: "guten-morgen-impulse",
  storageBucket: "guten-morgen-impulse.firebasestorage.app",
  messagingSenderId: "328220334423",
  appId: "1:328220334423:web:09db777b1757891a020612"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
