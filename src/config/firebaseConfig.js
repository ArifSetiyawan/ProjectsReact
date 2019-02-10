import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAyX0izZT4D600WFHg-mTCjTbl1zw065Q",
    authDomain: "fire-react-dddd2.firebaseapp.com",
    databaseURL: "https://fire-react-dddd2.firebaseio.com",
    projectId: "fire-react-dddd2",
    storageBucket: "fire-react-dddd2.appspot.com",
    messagingSenderId: "260215565109"
};
firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase