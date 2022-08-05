// import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAF9Q9OFGa72nlck4mwlxoeLj9JzNQItQE",
//     authDomain: "clone-demo-dd86f.firebaseapp.com",
//     projectId: "clone-demo-dd86f",
//     storageBucket: "clone-demo-dd86f.appspot.com",
//     messagingSenderId: "443009848118",
//     appId: "1:443009848118:web:a6f6539054423f1dd4d997",
//     measurementId: "G-KLQJEKSZJ0"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF9Q9OFGa72nlck4mwlxoeLj9JzNQItQE",
    authDomain: "clone-demo-dd86f.firebaseapp.com",
    projectId: "clone-demo-dd86f",
    storageBucket: "clone-demo-dd86f.appspot.com",
    messagingSenderId: "443009848118",
    appId: "1:443009848118:web:a6f6539054423f1dd4d997",
    measurementId: "G-KLQJEKSZJ0"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };