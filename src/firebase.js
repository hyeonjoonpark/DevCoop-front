// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO-Ukwahaz6H6sIqZNFUitnkGOA5pq63g",
  authDomain: "devcoop-b7a67.firebaseapp.com",
  projectId: "devcoop-b7a67",
  storageBucket: "devcoop-b7a67.appspot.com",
  messagingSenderId: "890526678680",
  appId: "1:890526678680:web:3bf951129696538c4e9aed",
  measurementId: "G-7EE8RPTTZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);