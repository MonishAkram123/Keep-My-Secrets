import React from 'react'
import { Link } from 'react-router-dom'
import { path_constants } from '../../config/constants'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
  const { DASHBOARD_PATH } = path_constants
  return (
    <nav className="nav-wrapper darken-4">
      <div className="container">
        <Link to={ DASHBOARD_PATH } className="brand-logo hide-on-med-and-down left">Keep It Secret</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar;
