import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtFe2cXK-EdAJFY_u3-bx7jaHzgdlHm0w",
    authDomain: "puppyluv-b4e0d.firebaseapp.com",
    databaseURL: "https://puppyluv-b4e0d-default-rtdb.firebaseio.com",
    projectId: "puppyluv-b4e0d",
    storageBucket: "puppyluv-b4e0d.appspot.com",
    messagingSenderId: "912974551861",
    appId: "1:912974551861:web:e36574ac2015e24b13ca7c",
    measurementId: "G-KJ297EMPMH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };