import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqpnPc0HBQY8n_6gzQGssbxggKUReThQg",
  authDomain: "fb-messenger-clone-4a10d.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-4a10d.firebaseio.com",
  projectId: "fb-messenger-clone-4a10d",
  storageBucket: "fb-messenger-clone-4a10d.appspot.com",
  messagingSenderId: "6821281704",
  appId: "1:6821281704:web:1913089f4fa4caf973679d",
  measurementId: "G-CLY247ZNS4"
});

const db = firebaseApp.firestore()

export default db