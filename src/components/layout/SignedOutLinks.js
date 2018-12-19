import React from 'react'
import { NavLink } from 'react-router-dom'
import { path_constants } from '../../config/constants'

const SignedOutLinks = () => {
  const { SIGNIN_PATH, SIGNUP_PATH } = path_constants
  return (
    <ul className="right">
      <li><NavLink to={ SIGNIN_PATH }>Log In</NavLink></li>
      <li><NavLink to={ SIGNUP_PATH }>Sign Up</NavLink></li>
    </ul>
  )
}
export default SignedOutLinks
