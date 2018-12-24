import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Paste Firebase API HERE
var config = {}


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
