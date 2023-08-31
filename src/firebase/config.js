import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyChR6jpir5THfb-nKDaPX8KZeZizJ_SP5o",
    authDomain: "thecastlesite-4ecb8.firebaseapp.com",
    projectId: "thecastlesite-4ecb8",
    storageBucket: "thecastlesite-4ecb8.appspot.com",
    messagingSenderId: "734568334886",
    appId: "1:734568334886:web:19b7ce987f5cd1400a88e7"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp ,projectStorage}