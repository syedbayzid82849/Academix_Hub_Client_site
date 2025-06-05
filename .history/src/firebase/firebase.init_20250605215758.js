import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ,
    authDomain: "academix-hub-708a3.firebaseapp.com",
    projectId: "academix-hub-708a3",
    storageBucket: "academix-hub-708a3.firebasestorage.app",
    messagingSenderId: "167585995516",
    appId: "1:167585995516:web:ed4ea96a3436f10f745579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);