import { action_constants } from '../../config/constants'
const { CREATE_SECRET, CREATE_SECRET_ERROR } = action_constants
const initState = {
  secrets:  []
}
const secretReducer = (state = initState, action) => {
  // console.log(action)
  switch( action.type) {
    case CREATE_SECRET:
      // this.setState(secrets);
      state.secrets.push({ id: '3', ...action.secret })
      // console.log(secrets)
  }
  return state;
}

export default secretReducer
