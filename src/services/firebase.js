import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

let config = {
  apiKey: "AIzaSyBJK4KQ7owZq_T9dm1dlO4uRINmpYht9No",
  authDomain: "react-slack-clone-de8aa.firebaseapp.com",
  databaseURL: "https://react-slack-clone-de8aa.firebaseio.com",
  projectId: "react-slack-clone-de8aa",
  storageBucket: "gs://react-slack-clone-de8aa.appspot.com/",
  messagingSenderId: "184034313598"
};

firebase.initializeApp(config);

export default firebase;
