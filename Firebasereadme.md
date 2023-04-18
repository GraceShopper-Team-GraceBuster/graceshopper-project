// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPYFxBuxmT-LFLd8HcwHXyOhn7WVLU-YA",
  authDomain: "grace-buster.firebaseapp.com",
  projectId: "grace-buster",
  storageBucket: "grace-buster.appspot.com",
  messagingSenderId: "245807568523",
  appId: "1:245807568523:web:e4d9725128c2bf28e9a68e",
  measurementId: "G-3Q6YHTNJ89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); what files should these go in

npm install firebase 

npm install -g firebase-tools

$ firebase login

Initiate your project
Run this command from your app’s root directory:

$ firebase init

When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

$ firebase deploy