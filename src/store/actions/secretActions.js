import { action_constants, firebase_constants } from '../../config/constants'
const { ROOT_SECRET_COLLECTION, INDIVIDUAL_SECRET_COLLECTION } = firebase_constants
const { CREATE_SECRET, CREATE_SECRET_ERROR,
  DELETE_SECRET, DELETE_SECRET_ERROR } = action_constants
export const createSecret = (secret, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection(ROOT_SECRET_COLLECTION).doc(id)
      .collection(INDIVIDUAL_SECRET_COLLECTION).add(secret)
      .then(dispatch({ type: CREATE_SECRET, secret }))
      .catch(err => dispatch({ type: CREATE_SECRET_ERROR, err }))

  }
}

export const deleteSecret = (uid, secret_id) => {
  return (dispatch, getState, { getFirestore }) => {
    let firestore = getFirestore();
    firestore.collection(ROOT_SECRET_COLLECTION).doc(uid)
    .collection(INDIVIDUAL_SECRET_COLLECTION).doc(secret_id).delete()
    .then(dispatch({ type: DELETE_SECRET }))
    .catch(err => dispatch({ type: DELETE_SECRET_ERROR, err }))
  }
}
