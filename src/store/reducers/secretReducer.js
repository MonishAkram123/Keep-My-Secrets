import { action_constants } from '../../config/constants'
const { CREATE_SECRET} = action_constants
const initState = {
  secrets:  []
}
const secretReducer = (state = initState, action) => {
  switch( action.type) {
    case CREATE_SECRET:
      console.log('secretReducer-Sucess:')
      return state;
    default:
      return state;
  }
}

export default secretReducer
