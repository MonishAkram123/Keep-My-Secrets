import React, { Component } from 'react'
import SecretSummary from './SecretSummary'
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
class SecretList extends Component {

  render() {
    const { secrets } = this.props
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

const mapStateToProps = (state) => {
  return {
     secrets: state.secret.secrets
  }
}
export default connect(mapStateToProps)(SecretList)
