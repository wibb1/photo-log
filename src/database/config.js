import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCc9Wy2I02YajveAzG-TY_GSgAvctjRFb4",
  authDomain: "wkc-photowall.firebaseapp.com",
  projectId: "wkc-photowall",
  storageBucket: "wkc-photowall.appspot.com",
  messagingSenderId: "750860525218",
  appId: "1:750860525218:web:deed8115a0640ac60301fb",
  measurementId: "G-E8QB6KV6GC"
};
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database} 