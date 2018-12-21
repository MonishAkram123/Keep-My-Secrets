import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { form_constants, action_constants, path_constants } from '../../config/constants'

const {  LABEL_EMAIL, LABEL_PASSWORD,
  EMAIL_FIELD_ID, PASSWORD_FIELD_ID } = form_constants;

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
    const { LOGIN_ERROR, AUTH } = this.props;
    if( AUTH.uid )
      return <Redirect to= { path_constants.DASHBOARD_PATH } />
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <form onSubmit= { this.handleSubmit }>
                <h3 className="blue-text">Login</h3>
                <div className="input-field">
                    <label htmlFor={ EMAIL_FIELD_ID }>{ LABEL_EMAIL }</label>
                    <input type="email" id={ EMAIL_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                <div className="input-field">
                    <label htmlFor={ PASSWORD_FIELD_ID }>{ LABEL_PASSWORD }</label>
                    <input type="password" id={ PASSWORD_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                  <button className="btn input-field btn-wide">LOGIN</button>
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
  // console.log('signIn', state.firebase.auth)
  return {
    LOGIN_ERROR: state.auth[LOGIN_ERROR],
    AUTH: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignIn)
