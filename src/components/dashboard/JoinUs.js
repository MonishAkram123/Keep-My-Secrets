import React from 'react'
import { route_constants } from '../../config/constants'
import { Link } from 'react-router-dom'

const { SIGNIN_ROUTE, SIGNUP_ROUTE } = route_constants

const JoinUs = () => {
  return (
    <div className="join-us container">
      <div className="row center-align">
        <div className="col l8 m8 offset-l2 offset-m2 s12">
          <div className="col l6 s12 left join-us-link">
            <Link to={ SIGNUP_ROUTE } className="btn btn-large btn-wide">Join Us</Link>
          </div>
          <div className="col l6 s12 right join-us-link">
            <Link to={ SIGNIN_ROUTE } className="btn btn-large btn-wide">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
