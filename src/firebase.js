import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBPIscfdiy7gNGK-xk1YT4lsDbmNpKZMvI",
  authDomain: "comments-reactjs-brunobersan.firebaseapp.com",
  databaseURL: "https://comments-reactjs-brunobersan.firebaseio.com",
  projectId: "comments-reactjs-brunobersan",
  storageBucket: "comments-reactjs-brunobersan.appspot.com",
  messagingSenderId: "609836628541"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();