import secretReducer from './secretReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  secret: secretReducer
})

export default rootReducer
