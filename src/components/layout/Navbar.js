import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { path_constants } from '../../config/constants'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = ({ auth }) => {
  const { DASHBOARD_PATH } = path_constants
  return (
    <nav className="nav-wrapper darken-4">
      <div className="container">
        <Link to={ DASHBOARD_PATH } className="brand-logo hide-on-med-and-down left">Keep It Secret</Link>
          { auth.uid ? <SignedInLinks />: <SignedOutLinks /> }
    </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
