import firebase from 'firebase';
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyCT5_gSbCUU4GXP6colEkTEI96Wk4-K-sY",
    authDomain: "barter-system-app-2b88a.firebaseapp.com",
    projectId: "barter-system-app-2b88a",
    storageBucket: "barter-system-app-2b88a.appspot.com",
    messagingSenderId: "947512432657",
    appId: "1:947512432657:web:b5406c923177e36307b9b0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
