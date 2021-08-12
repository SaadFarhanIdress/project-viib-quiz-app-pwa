import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGoAfFvSZ_zGfB_WEyItAc3tTbhstAwg0",
    authDomain: "quiz-app-98eaa.firebaseapp.com",
    projectId: "quiz-app-98eaa",
    storageBucket: "quiz-app-98eaa.appspot.com",
    messagingSenderId: "580731260532",
    appId: "1:580731260532:web:5c3a5377df4b108693cb21"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

export const configureNotifications = () => {
    Notification.requestPermission()
        .then(permission => {
            console.log("Permission,", permission);
            if (permission === "granted") {
                messaging.getToken().then(currToken => {
                    if (currToken) {
                        console.log('Token ==> ', currToken);
                    } else {
                        console.log('No instance ID token available. Request permission to generate token.');
                    }
                })
            }
        })
        .catch(e => {
            console.log('An error while the token is bein retreived', e);
        })
}