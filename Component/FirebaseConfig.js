// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOZv_16-nVDDIZQxk3ML2gPkjj256Y6aY",
  authDomain: "lettutorapp-d3edf.firebaseapp.com",
  projectId: "lettutorapp-d3edf",
  storageBucket: "lettutorapp-d3edf.appspot.com",
  messagingSenderId: "169494441186",
  appId: "1:169494441186:web:8c47dec40012ff8298c2bb"
};

// Initialize Firebase

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
} else{
  app = firebase.app();
}

const auth = firebase.auth();
export {auth}
// const app = initializeApp(firebaseConfig);