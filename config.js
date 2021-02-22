import * as firebase from 'firebase'
require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAQo2Uskzxsgf8wVnqxrRftv5dQ3XLSrUc",
  authDomain: "wily-736b0.firebaseapp.com",
  projectId: "wily-736b0",
  storageBucket: "wily-736b0.appspot.com",
  messagingSenderId: "1085475868004",
  appId: "1:1085475868004:web:832c9c811ce81f19f4be71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();