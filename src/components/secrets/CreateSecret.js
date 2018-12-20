import React, { Component } from 'react'
import { form_constants } from '../../config/constants'
class CreateSecret extends Component {
  state = {
    fields: [
      { id: 1, name: 'field1_name', value: 'field1_value' }
    ],
    secretTitle: ''
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
      title: '',
      secretFields: []
    }
    const { fields } = this.state
    fields.map( field => {
      let id = field.id
      let name = document.getElementById(field.name).value
      let value = document.getElementById(field.value).value
      secret.secretFields.push({ id, name, value })
      return null
    })
    secret.title = document.getElementById('title').value
    console.log(secret)
  }

  render() {
    const {
      LABEL_SECRET_TITLE,
      SECRET_TITLE_FIELD_ID
    } = form_constants
    const { fields } = this.state
    const fieldList = fields.map( field => {
          return (
            <div className="row" key={ field.id }>
              <div className="input-field col s4">
                <label htmlFor={ field.name }>Name</label>
                <input type="text" id={ field.name } required />
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
                <input type="text" id={ field.value } required />
              </div>

            </div>
          )
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m10 l8 offset-m1 offset-l2">
            <form onSubmit= { this.handleSubmit }>
              <h3 className="blue-text center">Create Secret</h3>
              <div className="input-field">
                <label htmlFor={ SECRET_TITLE_FIELD_ID }>{ LABEL_SECRET_TITLE }</label>
                <input type="text" id={ SECRET_TITLE_FIELD_ID } required />
              </div>
              { fieldList }
              <button className="btn" onClick = { this.addField }>ADD FIELD</button>
              <div className="input-field">
                  <button className="btn btn-wide">ADD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateSecret
