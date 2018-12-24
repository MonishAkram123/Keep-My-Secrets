import { action_constants } from '../../config/constants'
const { CREATE_SECRET, CREATE_SECRET_ERROR,
        DELETE_SECRET, DELETE_SECRET_ERROR } = action_constants
const initState = {
  secrets:  []
}
const secretReducer = (state = initState, action) => {
  switch( action.type) {
    case CREATE_SECRET:
      console.log('secretReducer', 'Secret Created')
      return state;
    case CREATE_SECRET_ERROR:
      console.log('secretReducer:', 'error creating secret')
      return state
    case DELETE_SECRET:
      console.log('secretActions-deleteSecret:', 'Secret Deleted');
      return state
    case DELETE_SECRET_ERROR:
      console.log('secretActions-deleteSecret:', 'error deleting secret');
      return state
    default:
      return state;
  }
}

export default secretReducer
