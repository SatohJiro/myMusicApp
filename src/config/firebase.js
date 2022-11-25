// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBdSoUyJJDHuWRtMmPWNF477B0r8Ne3ML0',
    authDomain: 'mywebsite-30fb7.firebaseapp.com',
    projectId: 'mywebsite-30fb7',
    storageBucket: 'mywebsite-30fb7.appspot.com',
    messagingSenderId: '898644928053',
    appId: '1:898644928053:web:a2743afb41ad4d4179b37c',
    measurementId: 'G-VVNMEMXJZC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
