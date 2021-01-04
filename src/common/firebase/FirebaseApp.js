import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig =
{
    apiKey: "AIzaSyDEGgDW7qMbgMlT0iy3JY5OqMeS7fCWmK0",
    authDomain: "schoolhub-9fe25.firebaseapp.com",
    databaseURL: "https://schoolhub-9fe25.firebaseio.com",
    projectId: "schoolhub-9fe25",
    storageBucket: "schoolhub-9fe25.appspot.com",
    messagingSenderId: "280405243122",
    appId: "1:280405243122:web:52b7567043afbfbe2d8c6b",
    measurementId: "G-0N1RFRWJ1H"
};

firebase.initializeApp(firebaseConfig);

class FirebaseApp
{
    constructor()
    {
        this.app = firebase;
        this.auth = firebase.auth();
        this.oDbSchools = firebase.database().ref('schools');
        this.oDbNotifications = firebase.database().ref('notifications');
    }
}

export default FirebaseApp;