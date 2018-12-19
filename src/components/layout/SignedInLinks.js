import React from 'react'
import { NavLink } from 'react-router-dom'
import { path_constants } from '../../config/constants'
const SignedInLinks = () => {
  const { SIGNOUT_PATH, PROFILE_PATH } = path_constants
  return (
    <ul className="right">
      <li><NavLink to= { SIGNOUT_PATH }>Log out</NavLink></li>
      <li><NavLink to={ PROFILE_PATH } className="btn btn-floating pink lighten-3">NN</NavLink></li>
    </ul>
  )
}
export default SignedInLinks
