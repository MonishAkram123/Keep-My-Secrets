import { action_constants } from '../../config/constants'
export const createSecret = (secret, id) => {
  const { CREATE_SECRET } = action_constants
  return (dispatch, getState, { getFirbase, getFirestore }) => {
    console.log('secretAction-createSecret:', secret, id)
    dispatch({ type: CREATE_SECRET, secret })
  }
}
