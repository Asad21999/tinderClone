// For Firebase JS SDK v7.20.0 and later, measurementId is opti
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBkUqOjmz6uya6hIrVrZBN2LtoGIb7u9Wo",
  authDomain: "asad-tinder.firebaseapp.com",
  projectId: "asad-tinder",
  storageBucket: "asad-tinder.appspot.com",
  messagingSenderId: "1018681402011",
  appId: "1:1018681402011:web:ca009bc8ce0dd361479c3e",
  measurementId: "G-NTP20PNW6C"
});
const database=firebaseApp.firestore();

export default database;