import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import 'typeface-roboto'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBcjmfvGrA8pV4pQF9rknL42kzGave2V00",
    authDomain: "votd-live.firebaseapp.com",
    projectId: "votd-live",
    storageBucket: "votd-live.appspot.com",
    messagingSenderId: "861656073745",
    appId: "1:861656073745:web:f86596ed22b6f467f7d3b0",
    measurementId: "G-PX7H4F196C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
logEvent(analytics, 'started');


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
