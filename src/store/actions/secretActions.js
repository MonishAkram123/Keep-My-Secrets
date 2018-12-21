import { action_constants, firebase_constants } from '../../config/constants'
const { ROOT_SECRET_COLLECTION, INDIVIDUAL_SECRET_COLLECTION } = firebase_constants
export const createSecret = (secret, id) => {
  const { CREATE_SECRET, CREATE_SECRET_ERROR } = action_constants
  return (dispatch, getState, { getFirbase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection(ROOT_SECRET_COLLECTION).doc(id)
      .collection(INDIVIDUAL_SECRET_COLLECTION).add(secret)
      .then(dispatch({ type: CREATE_SECRET, secret }))
      .catch(err => dispatch({ type: CREATE_SECRET_ERROR, err }))

  }
}
