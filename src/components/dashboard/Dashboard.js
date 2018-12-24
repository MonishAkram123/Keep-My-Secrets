import React from 'react'
import { connect } from 'react-redux'
import SecretList from '../secrets/SecretList'
import JoinUs from './JoinUs'
const Dashboard = ({ auth }) => {
  if(auth.uid)
    return <SecretList auth={ auth } />
  else
    return <JoinUs />
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Dashboard)
