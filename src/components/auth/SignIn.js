import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { form_constants, action_constants, route_constants } from '../../config/constants'

const {  LABEL_EMAIL, LABEL_PASSWORD,
  EMAIL_FIELD_ID, PASSWORD_FIELD_ID, LABEL_SIGNIN_BUTTON,
  HEAD_SIGNIN_FORM} = form_constants;

const { LOGIN_ERROR } = action_constants

class SignIn extends Component {
  state = {
  }
  handleChange = (e) => {
    let state = { ...this.state }
    state[e.target.id] = e.target.value
    this.setState({ ...state })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { LOGIN_ERROR, auth } = this.props;
    if( auth.uid )
      return <Redirect to= { route_constants.DASHBOARD_ROUTE } />
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <form onSubmit= { this.handleSubmit }>
                <h3 className="teal-text darken-4">{ HEAD_SIGNIN_FORM }</h3>
                <div className="input-field">
                    <label htmlFor={ EMAIL_FIELD_ID }>{ LABEL_EMAIL }</label>
                    <input type="email" id={ EMAIL_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                <div className="input-field">
                    <label htmlFor={ PASSWORD_FIELD_ID }>{ LABEL_PASSWORD }</label>
                    <input type="password" id={ PASSWORD_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                  <button className="btn input-field btn-wide">{ LABEL_SIGNIN_BUTTON }</button>
                  <p className="center red-text">{ LOGIN_ERROR }</p>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

const mapStateToProps = state => {
  return {
    LOGIN_ERROR: state.auth[LOGIN_ERROR],
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignIn)
