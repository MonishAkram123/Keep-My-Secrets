import secretReducer from './secretReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  secret: secretReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
