// import firebase from "firebase/app";
// // import firebase from 'firebase/app';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCw_cvu9FXGnolxzGSjzGKkHNDx09Xtc70",
    authDomain: "netflix-clone-e4eb1.firebaseapp.com",
    projectId: "netflix-clone-e4eb1",
    storageBucket: "netflix-clone-e4eb1.appspot.com",
    messagingSenderId: "317379308949",
    appId: "1:317379308949:web:aea936df10fb9079c19a9c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
