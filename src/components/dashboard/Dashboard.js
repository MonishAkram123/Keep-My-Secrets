import React from 'react'
import { connect } from 'react-redux'
import SecretList from '../secrets/SecretList'
const Dashboard = ({ auth }) => {
  if(auth.uid)
    return <SecretList auth={ auth } />
  else
    return <h4>Login First</h4>
}

const mapStateToProps = state => {
  console.log('DashBoard', state);
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Dashboard)
