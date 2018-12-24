import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { route_constants } from '../../config/constants'

const { PROFILE_ROUTE, CREATE_SECRET_ROUTE } = route_constants

const SignedInLinks = (props) => {
  const { profile } = props
  return (
    <ul className="right">
      <li><NavLink to= { CREATE_SECRET_ROUTE }>+Add Secret</NavLink></li>
      <li><a onClick= { props.signOut }>Log out</a></li>
      <li><NavLink to={ PROFILE_ROUTE } className="btn btn-floating cyan darken-5 z-depth-0">{ profile.initials }</NavLink></li>
    </ul>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
