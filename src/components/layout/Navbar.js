import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { route_constants } from '../../config/constants'
import SignedInLinks from './SignedInLinks'
const Navbar = ({ auth }) => {
  const { DASHBOARD_ROUTE } = route_constants
  return (
    <nav className="nav-wrapper cyan darken-3">
      <div className="container">
        <Link to={ DASHBOARD_ROUTE } className="brand-logo hide-on-med-and-down center">Keep My Secrets</Link>
        <Link to={ DASHBOARD_ROUTE } className="brand-logo hide-on-large-only left">Keep My Secrets</Link>
          { auth.uid ? <SignedInLinks />: null }
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
