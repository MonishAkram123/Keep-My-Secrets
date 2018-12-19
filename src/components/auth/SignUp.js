import React from 'react'
import { form_constants } from '../../config/constants'
const SignUp = () => {
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
  return (
    <div className="container">
        <div className="row">
          <div className="col s12 m10 l8 offset-m1 offset-l2">
            <form>
              <h3 className="blue-text">Sign up</h3>
              <div className="row">
                <div className="input-field col s6">
                    <label htmlFor={ FIRSTNAME_FIELD_ID }>{ LABEL_FIRSTNAME }</label>
                    <input type="text" id={ FIRSTNAME_FIELD_ID } />
                </div>
                <div className="input-field col s6">
                    <label htmlFor={ LASTNAME_FIELD_ID }>{ LABEL_LASTNAME }</label>
                    <input type="text" id={ LASTNAME_FIELD_ID } />
                </div>
              </div>
              <div className="input-field">
                  <label htmlFor={ EMAIL_FIELD_ID }>{ LABEL_EMAIL }</label>
                  <input type="email" id={ EMAIL_FIELD_ID } />
              </div>
              <div className="input-field">
                  <label htmlFor={ PHONE_FIELD_ID }>{ LABEL_PHONE }</label>
                  <input type="number" id={ PHONE_FIELD_ID } />
              </div>
              <div className="row">
                <div className="input-field col s6">
                    <label htmlFor={ PASSWORD_FIELD_ID }>{ LABEL_PASSWORD }</label>
                    <input type="password" id={ PASSWORD_FIELD_ID } />
                </div>
                <div className="input-field col s6">
                    <label htmlFor={ CONFIRM_PASSWORD_FIELD_ID }>{ LABEL_CONFIRM_PASSWORD }</label>
                    <input type="password" id={ CONFIRM_PASSWORD_FIELD_ID } />
                </div>
              </div>
                <button className="btn input-field btn-wide">LOGIN</button>
            </form>
          </div>
        </div>
    </div>
  )
}
export default SignUp
