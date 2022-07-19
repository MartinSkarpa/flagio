import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU2B2thiZeclQIMDxs2KI2jP50mSpa_ew",
    authDomain: "flagio-5c8e8.firebaseapp.com",
    projectId: "flagio-5c8e8",
    storageBucket: "flagio-5c8e8.appspot.com",
    messagingSenderId: "284262123553",
    appId: "1:284262123553:web:e77029922ae6be804efb60",
    databaseURL: "https://flagio-5c8e8-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database
export const database = getDatabase(app);