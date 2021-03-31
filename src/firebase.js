import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHJ63U1-f0AhDtgDXUtkpxZs-DnzrsWFg",
    authDomain: "e-commerce1-by-raheel.firebaseapp.com",
    projectId: "e-commerce1-by-raheel",
    storageBucket: "e-commerce1-by-raheel.appspot.com",
    messagingSenderId: "248287885425",
    appId: "1:248287885425:web:478a7dbf9542e549d1c3d0",
    measurementId: "G-07V4XHF7E7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth(); 

  export {db, auth};