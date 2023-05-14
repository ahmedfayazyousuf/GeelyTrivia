// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBbU3PDC0YlGSCVPI4ACIz82e_HWONLY",
  authDomain: "geelytri.firebaseapp.com",
  projectId: "geelytri",
  storageBucket: "geelytri.appspot.com",
  messagingSenderId: "459865955171",
  appId: "1:459865955171:web:70c0f6d37c3240298c5156",
  measurementId: "G-7CG13M2257"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

