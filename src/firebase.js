//firebase.js

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

const firebaseConfig = {
    apiKey: "AIzaSyCR0D9v-i7Eysaj2v7MF0LlfD3gfZFn0v8",
    authDomain: "pwa-push-2118.firebaseapp.com",
    projectId: "pwa-push-2118",
    storageBucket: "pwa-push-2118.appspot.com",
    messagingSenderId: "577307638683",
    appId: "1:577307638683:web:223bb814fe1c3312d37f3e"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.messaging()