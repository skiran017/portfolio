import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAqQSOYVKzhcDTXxK8b_SGukfhroj35uvI',
  authDomain: 'portfolio-form-db-1e226.firebaseapp.com',
  projectId: 'portfolio-form-db-1e226',
  storageBucket: 'portfolio-form-db-1e226.appspot.com',
  messagingSenderId: '203070807869',
  appId: '1:203070807869:web:204bd0881781642cf2ef54',
});
const db = getFirestore(firebaseApp);

export { db };
