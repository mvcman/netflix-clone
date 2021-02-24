import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCD-Qs9oVjc0mtb6Z1EMXyIzhCmFdOpecc',
    authDomain: 'netflix-clone-188ee.firebaseapp.com',
    projectId: 'netflix-clone-188ee',
    storageBucket: 'netflix-clone-188ee.appspot.com',
    messagingSenderId: '594527518756',
    appId: '1:594527518756:web:2c1fc2fa2a91c6a968d8b1',
    measurementId: 'G-ZDPHZM7W7C',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
