import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBoOHIPHp7IwHMB6srzp-L4Tqxo7l8c-J4",
    authDomain: "note-taker-app-e922e.firebaseapp.com",
    databaseURL: "https://note-taker-app-e922e.firebaseio.com",
    projectId: "note-taker-app-e922e",
    storageBucket: "note-taker-app-e922e.appspot.com",
    messagingSenderId: "829709103541",
    appId: "1:829709103541:web:d67e31b89d7dda148da9fc",
    measurementId: "G-MRZ2H4TEE8"
  };

// Initialize Firebase
let myApp = Firebase.initializeApp(config);
export const db = myApp.database();

