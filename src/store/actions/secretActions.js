import { action_constants } from '../../config/constants'
export const createSecret = (secret) => {
  const { CREATE_SECRET } = action_constants
  return (dispatch, getState, { getFirbase, getFirestore }) => {
    dispatch({ type: CREATE_SECRET, secret })
  }
}
