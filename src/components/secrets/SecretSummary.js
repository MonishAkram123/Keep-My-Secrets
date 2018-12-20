import React, { Component } from 'react'
class SecretSummary extends Component {
    render() {
      const { fields } = this.props
      return (
        <p>
          {
            fields.map( field => {
              return (
                  <span className="secret row" key={ field.id }>
                    <span className="col s4">{ field.name }</span>
                    <span className="col s8">{ field.value }</span>
                  </span>
              )
            })
          }
        </p>
      )
  }
}
export default SecretSummary
