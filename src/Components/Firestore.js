import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8tF0MvIHH9yV60lkZ8dULoDVS0sWQ1gs",
    authDomain: "arkano-test-7fad5.firebaseapp.com",
    databaseURL: "https://arkano-test-7fad5.firebaseio.com",
    projectId: "arkano-test-7fad5",
    storageBucket: "",
    messagingSenderId: "734194396122",
    appId: "1:734194396122:web:6996f286bd3a1355"
  });

 const db = firebaseApp.firestore();

export  { db };