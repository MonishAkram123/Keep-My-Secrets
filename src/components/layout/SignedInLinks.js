import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { path_constants } from '../../config/constants'
const SignedInLinks = (props) => {
  const { SIGNOUT_PATH, PROFILE_PATH, CREATE_SECRET_PATH } = path_constants
  return (
    <ul className="right">
      <li><NavLink to= { CREATE_SECRET_PATH }>+Add Secret</NavLink></li>
      <li><a onClick= { props.signOut }>Log out</a></li>
      <li><NavLink to={ PROFILE_PATH } className="btn btn-floating pink lighten-3">NN</NavLink></li>
    </ul>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
