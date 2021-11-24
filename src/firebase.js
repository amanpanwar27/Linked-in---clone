import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBAtR7mEqTsSkmFEWFFPRshluftqftV17k",
  authDomain: "linkedin-clone-d8bf8.firebaseapp.com",
  projectId: "linkedin-clone-d8bf8",
  storageBucket: "linkedin-clone-d8bf8.appspot.com",
  messagingSenderId: "112947419622",
  appId: "1:112947419622:web:0c6cddfbd3dd8cd4975e27",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

export default db;
