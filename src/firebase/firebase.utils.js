import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAS7LFgtECi_14QbUgmnXSduEorySb_Kg",
    authDomain: "new-db-855ca.firebaseapp.com",
    projectId: "new-db-855ca",
    storageBucket: "new-db-855ca.appspot.com",
    messagingSenderId: "548782582339",
    appId: "1:548782582339:web:83ec79097794adf00a02f6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup (provider);

export default firebase;