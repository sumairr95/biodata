import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBGcRficdK1ErNsnyPVFc5Oab1VpqkoBrs",
    authDomain: "biodatabase-315bb.firebaseapp.com",
    projectId: "biodatabase-315bb",
    storageBucket: "biodatabase-315bb.appspot.com",
    messagingSenderId: "825156867511",
    appId: "1:825156867511:web:4ac74de8df5a66fbfb8432"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
