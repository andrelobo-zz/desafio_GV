import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvhA4DXOsnVYOFfYUEE7sNCknQKur2cBk",
  authDomain: "messageboardgv.firebaseapp.com",
  projectId: "messageboardgv",
  storageBucket: "messageboardgv.appspot.com",
  messagingSenderId: "348837995714",
  appId: "1:348837995714:web:5a6dd011b00fa999ef875b"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
