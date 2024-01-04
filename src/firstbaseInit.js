// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV41nPYpblPzcMmN4txdcf9o7WfJ7cQHI",
    authDomain: "to-do-app-58c23.firebaseapp.com",
    projectId: "to-do-app-58c23",
    storageBucket: "to-do-app-58c23.appspot.com",
    messagingSenderId: "575771119939",
    appId: "1:575771119939:web:d612c30af74f721091dff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;