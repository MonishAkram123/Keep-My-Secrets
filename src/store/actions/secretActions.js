import { action_constants } from '../../config/constants'
export const createSecret = (secret) => {
  const { CREATE_SECRET, CREATE_SECRET_ERROR } = action_constants
  return (dispatch, getState) => {
    // console.log('this is secret', secret);
    dispatch({ type: CREATE_SECRET, secret })
  }
}
