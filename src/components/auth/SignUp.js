import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import { form_constants, path_constants } from '../../config/constants'

const {
  LABEL_EMAIL,
  EMAIL_FIELD_ID,
  LABEL_PASSWORD,
  PASSWORD_FIELD_ID,
  LABEL_CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_FIELD_ID,
  LABEL_FIRSTNAME,
  FIRSTNAME_FIELD_ID,
  LABEL_LASTNAME,
  LASTNAME_FIELD_ID,
  LABEL_PHONE,
  PHONE_FIELD_ID
} = form_constants;

class SignUp extends Component {
  state = {
    wrongPassword: null
  }

  handleChange = e => {
    let state = { ...state }
    state[e.target.id] = e.target.value
    this.setState({ ...state })
  }

  handleSubmit = e => {
    e.preventDefault();
    let password = this.state[PASSWORD_FIELD_ID]
    let conf_password = this.state[CONFIRM_PASSWORD_FIELD_ID]
    if(password !== conf_password) {
      this.setState({
        ...this.state,
        wrongPassword: "Password do not match!!!"
      })
    }
      else {
        this.setState({...this.state, wrongPassword: null })
        this.props.signUp(this.state)
    }
  }

  render() {
    const { AUTH, SIGNUP_ERROR } = this.props
    const { wrongPassword } = this.state
    if( AUTH.uid )
      return <Redirect to={ path_constants.DASHBOARD_PATH } />
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <form onSubmit={ this.handleSubmit }>
                <h3 className="blue-text">Sign up</h3>
                <div className="row">
                  <div className="input-field col s6">
                      <label htmlFor={ FIRSTNAME_FIELD_ID }>{ LABEL_FIRSTNAME }</label>
                      <input type="text" id={ FIRSTNAME_FIELD_ID } onChange={ this.handleChange } required />
                  </div>
                  <div className="input-field col s6">
                      <label htmlFor={ LASTNAME_FIELD_ID }>{ LABEL_LASTNAME }</label>
                      <input type="text" id={ LASTNAME_FIELD_ID } onChange={ this.handleChange } required />
                  </div>
                </div>
                <div className="input-field">
                    <label htmlFor={ EMAIL_FIELD_ID }>{ LABEL_EMAIL }</label>
                    <input type="email" id={ EMAIL_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                <div className="input-field">
                    <label htmlFor={ PHONE_FIELD_ID }>{ LABEL_PHONE }</label>
                    <input type="number" id={ PHONE_FIELD_ID } onChange={ this.handleChange } required />
                </div>
                <div className="row">
                  <div className="input-field col s6">
                      <label htmlFor={ PASSWORD_FIELD_ID }>{ LABEL_PASSWORD }</label>
                      <input type="password" id={ PASSWORD_FIELD_ID } onChange={ this.handleChange } required />
                  </div>
                  <div className="input-field col s6">
                      <label htmlFor={ CONFIRM_PASSWORD_FIELD_ID }>{ LABEL_CONFIRM_PASSWORD }</label>
                      <input type="password" id={ CONFIRM_PASSWORD_FIELD_ID } onChange={ this.handleChange } required />
                  </div>
                </div>
                  <p className="red-text center">{ this.state.wrongPassword }</p>
                  <p className="red-text center">{ SIGNUP_ERROR }</p>
                  <button className="btn input-field btn-wide">LOGIN</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch( signUp(newUser) )
  }
}

const mapStateToProps = state => {
  console.log('SignUp:', state)
  return {
    SIGNUP_ERROR: state.auth.SIGNUP_ERROR,
    AUTH: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
