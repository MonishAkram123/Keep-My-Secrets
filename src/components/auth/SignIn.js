import React, { Component } from 'react'
import { form_constants } from '../../config/constants'
class SignIn extends Component {
  render() {
    const {
      LABEL_EMAIL,
      LABEL_PASSWORD,
      EMAIL_FIELD_ID,
      PASSWORD_FIELD_ID
    } = form_constants;
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <form>
                <h3 className="blue-text">Login</h3>
                <div className="input-field">
                    <label htmlFor={ EMAIL_FIELD_ID }>{ LABEL_EMAIL }</label>
                    <input type="email" id={ EMAIL_FIELD_ID } />
                </div>
                <div className="input-field">
                    <label htmlFor={ PASSWORD_FIELD_ID }>{ LABEL_PASSWORD }</label>
                    <input type="password" id={ PASSWORD_FIELD_ID } />
                </div>
                  <button className="btn input-field btn-wide">LOGIN</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}
export default SignIn
