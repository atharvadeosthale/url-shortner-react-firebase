import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxQEcxMfsNLxBYkaOP88J-dgsmXxYRBBI",
  authDomain: "url-shortener-yt.firebaseapp.com",
  projectId: "url-shortener-yt",
  storageBucket: "url-shortener-yt.appspot.com",
  messagingSenderId: "503478375122",
  appId: "1:503478375122:web:4b4f015236ed0d2c2d130b",
  measurementId: "G-35N1CXLNXC",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
