importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDvHAsb6bC98hnE72_N6QyfYLA-KPBYDpE",
    authDomain: "expense-tracker-69475.firebaseapp.com",
    projectId: "expense-tracker-69475",
    storageBucket: "expense-tracker-69475.appspot.com",
    messagingSenderId: "291589673680",
    appId: "1:291589673680:web:63958fb909ad9bfe14c4d5"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();