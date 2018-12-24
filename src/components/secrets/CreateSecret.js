import React, { Component } from 'react'
import { form_constants, route_constants } from '../../config/constants'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createSecret } from '../../store/actions/secretActions'

const {
  LABEL_SECRET_TITLE,
  SECRET_TITLE_FIELD_ID,
  HEAD_CREATE_SECRET,
  CREATE_SECRET_BUTTON,
  SECRET_FIELDS_ARRAY,
  ADD_FIELD_BUTTON,
  FIELD_NAME,
  FIELD_VALUE,
  FIELD_ID
} = form_constants

class CreateSecret extends Component {
  state = {
    secretTitle: '',
    fields: [
      { id: 1, name: 'field1_name', value: 'field1_value' }
    ]
  }

  addField = (e) => {
    e.preventDefault();
    let newId = this.state.fields.length +1;
    let fields = [...this.state.fields,
    { id: newId, name: 'field' +newId +'_name',
      value: 'field' +newId +'_value', label: 'field '+newId }]
    this.setState({
      ...this.state,
      fields
    })
  }

  removeField = () => {
    const id = this.state.fields.length
    let fields = this.state.fields.filter(field => field.id !== id )
    this.setState({
      ...this.state,
      fields
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let secret = {
      [SECRET_TITLE_FIELD_ID]: '',
      [SECRET_FIELDS_ARRAY]: []
    }
    const { fields } = this.state
    fields.map( field => {
      let new_field = {
        [FIELD_ID]: field.id,
        [FIELD_NAME]: document.getElementById(field.name).value,
        [FIELD_VALUE]: document.getElementById(field.value).value
      }
      secret.fields.push(new_field)
      return null
    })
    secret.title = document.getElementById('title').value
    this.props.createSecret(secret, this.props.auth.uid );
    this.props.history.push(route_constants.DASHBOARD_ROUTE)
  }

  render() {
    const { auth } = this.props
    if( !auth.uid ) return <Redirect to= { route_constants.DASHBOARD_ROUTE } />
    const { fields } = this.state
    const fieldList = fields.map( field => {
          return (
            <div className="row" key={ field.id }>
              <div className="input-field col s4">
                <label htmlFor={ field.name }>Name</label>
                <input type="text" maxLength="25" id={ field.name } required />
              </div>
              <div className="input-field col s8">
                {
                  field.id === fields.length && fields.length !== 1? (
                      <i className="material-icons suffix" onClick={ this.removeField }>
                        { "delete" }
                      </i>
                  ) : ( null )
                }
                <label htmlFor={ field.value }>Value</label>
                <input type="text" maxLength="30" id={ field.value } required />
              </div>

            </div>
          )
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m10 l8 offset-m1 offset-l2">
            <form className="z-depth-4" onSubmit= { this.handleSubmit }>
              <h3 className="teal-text darken-4 center">{ HEAD_CREATE_SECRET }</h3>
              <div className="input-field">
                <label htmlFor={ SECRET_TITLE_FIELD_ID }>{ LABEL_SECRET_TITLE }</label>
                <input type="text" id={ SECRET_TITLE_FIELD_ID } maxLength="35" required />
              </div>
              { fieldList }
              <button className="btn" onClick = { this.addField }>{ ADD_FIELD_BUTTON }</button>
              <div className="input-field">
                  <button className="btn btn-wide">{ CREATE_SECRET_BUTTON }</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createSecret: (secret, id) => dispatch(createSecret(secret, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSecret)
