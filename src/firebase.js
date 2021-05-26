import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAy-0hamzgmTUODoWujjva06cUqqv1Vfmw",
    authDomain: "savanna-2dbf2.firebaseapp.com",
    databaseURL: "https://savanna-2dbf2.firebaseio.com",
    projectId: "savanna-2dbf2",
    storageBucket: "savanna-2dbf2.appspot.com",
    messagingSenderId: "653482971480",
    appId: "1:653482971480:web:898b75b8fc36547b13d52d",
    measurementId: "G-L9Z4YK08H8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, firebaseApp };
