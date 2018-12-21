import { form_constants, action_constants } from '../../config/constants'
import { actionTypes } from 'redux-firestore'
const { EMAIL_FIELD_ID, PASSWORD_FIELD_ID,
        FIRSTNAME_FIELD_ID, LASTNAME_FIELD_ID,
        PHONE_FIELD_ID } = form_constants
const { LOGIN_SUCCESS, LOGIN_ERROR,
  SIGNOUT_SUCCESS, SIGNOUT_ERROR,
  SIGNUP_SUCCESS, SIGNUP_ERROR } = action_constants

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials[ EMAIL_FIELD_ID ], credentials[ PASSWORD_FIELD_ID ]
    ).then(resp => {
      dispatch({ type: LOGIN_SUCCESS})
    }).catch(err => {
      dispatch({ type: LOGIN_ERROR, err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase);
    firebase.auth().signOut()
      .then( () => {
        dispatch({ type: SIGNOUT_SUCCESS })
        dispatch({ type: actionTypes.CLEAR_DATA })
      }).catch( err => {
        dispatch({ type: SIGNOUT_ERROR, err})
      })
  }
}

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser[EMAIL_FIELD_ID],
      newUser[PASSWORD_FIELD_ID]
    ).then( resp => {
      firestore.collection('users').doc(resp.user.uid).set({
        [newUser[FIRSTNAME_FIELD_ID]]: newUser[FIRSTNAME_FIELD_ID],
        [newUser[LASTNAME_FIELD_ID]]: newUser[LASTNAME_FIELD_ID],
        [newUser[EMAIL_FIELD_ID]]: newUser[EMAIL_FIELD_ID],
        [newUser[PHONE_FIELD_ID]]: newUser[PHONE_FIELD_ID],
        initials: newUser[FIRSTNAME_FIELD_ID][0] +newUser[LASTNAME_FIELD_ID][0]
      })
        .then( () => {
          dispatch({ type: SIGNUP_SUCCESS })
        })
    }).catch( err => {
      dispatch({ type: SIGNUP_ERROR, err})
    })
  }
}
