import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

navigator.serviceWorker.register('/firebase-messaging-sw.js', {
    type: 'module',
});
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAVsSO-cZKRdlRoRW_jD91Xc58xGG8xleA',
    authDomain: 'fcm-apps-update.firebaseapp.com',
    projectId: 'fcm-apps-update',
    storageBucket: 'fcm-apps-update.appspot.com',
    messagingSenderId: '252758523010',
    appId: '1:252758523010:web:587def4dd4ed4d484ac89b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
console.log('pubkey: ', process.env.REACT_APP_WEBPUSH_PUBLIC_KEY);
console.log(messaging);
const token = getToken(messaging, { vapidKey: process.env.WEBPUSH_PUBLIC_KEY })
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log('current token (idx.js): ', currentToken);
            return currentToken;
        } else {
            // Show permission request UI
            console.log(
                'No registration token available. Request permission to generate one.'
            );
            // ...
        }
    })
    .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
