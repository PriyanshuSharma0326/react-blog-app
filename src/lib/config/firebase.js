import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOoGE3ECiqbDl9fuIiZBpzfGfBW7PnyX4",
    authDomain: "react-blog-app-4394a.firebaseapp.com",
    projectId: "react-blog-app-4394a",
    storageBucket: "react-blog-app-4394a.appspot.com",
    messagingSenderId: "554142938998",
    appId: "1:554142938998:web:289a723975793730892c57"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export {
    auth,
    provider,
    db,
};
