import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyASuBSIHiWFPeTRXe5m_vAGW_cz4i2Pvxo",
    authDomain: "keep-my-secrets-2dd5a.firebaseapp.com",
    databaseURL: "https://keep-my-secrets-2dd5a.firebaseio.com",
    projectId: "keep-my-secrets-2dd5a",
    storageBucket: "keep-my-secrets-2dd5a.appspot.com",
    messagingSenderId: "655919105542"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase
