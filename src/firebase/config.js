import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAFFfjQxBOVdOp3zJTMt6-8UJeJz_0d3oI",
    authDomain: "fikirbulutu-676d4.firebaseapp.com",
    projectId: "fikirbulutu-676d4",
    storageBucket: "fikirbulutu-676d4.appspot.com",
    messagingSenderId: "1045956852094",
    appId: "1:1045956852094:web:d7c8da428fd869641cdb2f"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();


  export {projectFirestore, projectAuth};