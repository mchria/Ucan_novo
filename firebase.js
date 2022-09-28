import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0NISqfxwpKPe9hNK7yZC-kTvPTVuXMxI",
    authDomain: "ucan-71797.firebaseapp.com",
    projectId: "ucan-71797",
    storageBucket: "ucan-71797.appspot.com",
    messagingSenderId: "300265158810",
    appId: "1:300265158810:web:db6a52a13d22f251c14723",
    measurementId: "G-HPDCYXCC2Z"
  };

  const firestore = getFirestore();
  const app = initializeApp(firebaseConfig);