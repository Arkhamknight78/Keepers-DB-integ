import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-XB3EVslp-tFyTiBlWXHMSwY8oDQ2pWA",
    authDomain: "keepers-clone.firebaseapp.com",
    projectId: "keepers-clone",
    storageBucket: "keepers-clone.appspot.com",
    messagingSenderId: "668735653657",
    appId: "1:668735653657:web:0c037c5e686338abc82788",
    measurementId: "G-8PRPJS9V0G"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 
export default db;