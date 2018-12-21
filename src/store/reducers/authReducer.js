import { action_constants } from '../../config/constants'

const { LOGIN_SUCCESS, LOGIN_ERROR,
        SIGNOUT_SUCCESS, SIGNOUT_ERROR,
        SIGNUP_SUCCESS, SIGNUP_ERROR } = action_constants
const initState = {}
const authReducer = (state = initState, action ) => {
  switch( action.type ) {
    case LOGIN_SUCCESS:
      return { ...state, LOGIN_ERROR: null }
    case LOGIN_ERROR:
      return { ...state, LOGIN_ERROR: action.err.message }
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNOUT_ERROR:
      return { ...state, SIGNOUT_ERROR: action.err.message }
    case SIGNUP_SUCCESS:
      console.log('authReducer:',  'SignUp Success')
      return state
    case SIGNUP_ERROR:
      console.log('authReducer:',  action.err)
      return { ...state, SIGNUP_ERROR: action.err.message }
    default:
      return state
  }
}
export default authReducer
