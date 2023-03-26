import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAtV1FqyB_jJAR5QtRARJafACpsnTm1cf4",
    authDomain: "fir-first-f33dc.firebaseapp.com",
    projectId: "fir-first-f33dc",
    storageBucket: "fir-first-f33dc.appspot.com",
    messagingSenderId: "193686309267",
    appId: "1:193686309267:web:b82a549a1cae0db802c066"
};

const app = initializeApp(firebaseConfig);

export default firebase;