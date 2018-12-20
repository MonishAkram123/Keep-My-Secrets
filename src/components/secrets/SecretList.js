import React, { Component } from 'react'
import SecretSummary from './SecretSummary'
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize'
class SecretList extends Component {
  state = {
    secrets: [
      { id: '1', title: 'Gmail', fields: [
        { id: '1', name: 'email', value: 'monishakram123@gmail.com' },
        { id: '2', name: 'password', value: 'akram12345' }
      ]},
      { id: '2', title: 'Github', fields: [
        { id: '1', name: 'username', value: 'MonishAkram123' },
        { id: '2', name: 'password', value: '12345' },
        { id: '3', name: 'phone_no', value: '9161759716' }
      ]}
    ]
  }
  render() {
    const { secrets } = this.state
    const secretList = secrets.length ? (
        <Collapsible popout >
          {
            secrets.map(secret => {
              return (
                <CollapsibleItem  className="white card-title" header={ secret.title } key={ secret.id }>
                  <SecretSummary fields = { secret.fields } />
                </CollapsibleItem>
              )
            })
          }
        </Collapsible>
    ) : (
      <h3 className="blue-text center">No Secrets</h3>
    )
    return (
      <div className="secret-list container">
        <Row>
          <Col className="offset-l2 offset-m1" s={12} m={10} l={8}>
            { secretList }
          </Col>
        </Row>
      </div>
    )
  }
}

export default SecretList
