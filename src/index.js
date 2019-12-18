import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppMarvel from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcv89QYQrDAKoJITvjXWt5qY4LfiLxl1E",
    authDomain: "react-marvel-fee32.firebaseapp.com",
    databaseURL: "https://react-marvel-fee32.firebaseio.com",
    projectId: "react-marvel-fee32",
    storageBucket: "react-marvel-fee32.appspot.com",
    messagingSenderId: "120608841197",
    appId: "1:120608841197:web:090366f1160fc451"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<AppMarvel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
