import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// API_KY=AIzaSyDAnA9jK--kTgbcF_qMyYYqvyObLWQk-Sc
// AUTH_DOMAIN=menu-app-c9b24.firebaseapp.com
// PROJECT_ID=menu-app-c9b24
// STORAGE_BUCKET= menu-app-c9b24.appspot.com
// MESSAGING_SENDER_ID = 569273184241
// API_ID=1:569273184241:web:b30371b8b4478250125e50

const firebaseConfig = {
  apiKey: 'AIzaSyDAnA9jK--kTgbcF_qMyYYqvyObLWQk-Sc',
  authDomain: 'menu-app-c9b24.firebaseapp.com',
  projectId: 'menu-app-c9b24',
  storageBucket: 'menu-app-c9b24.appspot.com',
  messagingSenderId: '569273184241',
  appId: '1:569273184241:web:b30371b8b4478250125e50',
};

initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
