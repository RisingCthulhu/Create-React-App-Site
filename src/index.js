import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyAVsSO-cZKRdlRoRW_jD91Xc58xGG8xleA",
  authDomain: "fcm-apps-update.firebaseapp.com",
  projectId: "fcm-apps-update",
  storageBucket: "fcm-apps-update.appspot.com",
  messagingSenderId: "252758523010",
  appId: "1:252758523010:web:587def4dd4ed4d484ac89b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
console.log(process.env.WEBPUSH_PUBLIC_KEY);
const token = getToken(messaging, { vapidKey: 'BLS8boBN64yAuzS16o-ietTnXFIETLldyoddpbA70TXgm30V8skgRRl3pIJyiUCfG8lXSeFduDuEKppb2Vx_CrM' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken);
    return currentToken;
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});