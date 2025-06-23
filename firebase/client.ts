// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFZZaZUAi2QYHg1ti53YJS5rfhbqKPFYM",
    authDomain: "dk-tracker.firebaseapp.com",
    projectId: "dk-tracker",
    storageBucket: "dk-tracker.firebasestorage.app",
    messagingSenderId: "446069930384",
    appId: "1:446069930384:web:c64b5e071f088e495c9b15",
    measurementId: "G-C6C9GB5FNG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
