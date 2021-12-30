// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj7gVW3TgyUaQeDdV-xnadWs1FqQK5kvg",
    authDomain: "myfirstproject-531ca.firebaseapp.com",
    databaseURL: "https://myfirstproject-531ca-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myfirstproject-531ca",
    storageBucket: "myfirstproject-531ca.appspot.com",
    messagingSenderId: "534533459602",
    appId: "1:534533459602:web:7c96443314e09dd623e04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);