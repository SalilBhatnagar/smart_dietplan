import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyCYe1AoMkr2MNK0dNhKgOT-aW0h8j2z2a8",
    authDomain: "kapiva-app.firebaseapp.com",
    projectId: "kapiva-app",
    storageBucket: "kapiva-app.appspot.com",
    messagingSenderId: "698098002046",
    appId: "1:698098002046:web:3ce478efc9bd4d01afd02f",
    measurementId: "G-ELEW3E63TX"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};