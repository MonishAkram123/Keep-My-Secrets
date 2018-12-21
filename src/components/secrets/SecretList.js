import React, { Component } from 'react'
import SecretSummary from './SecretSummary'
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { firebase_constants } from '../../config/constants'

const { ROOT_SECRET_COLLECTION, INDIVIDUAL_SECRET_COLLECTION } = firebase_constants

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
  console.log('called', state);
  let secrets = [];
  if(state.firestore.ordered[ROOT_SECRET_COLLECTION])
    secrets = state.firestore.ordered[ROOT_SECRET_COLLECTION][0][INDIVIDUAL_SECRET_COLLECTION]
  return {
     secrets
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( ({ auth }) => {
    return [{
      collection: ROOT_SECRET_COLLECTION,
      doc: auth.uid,
      subcollections: [{
        collection: INDIVIDUAL_SECRET_COLLECTION
      }]
     }]
  }
  )
)(SecretList)
