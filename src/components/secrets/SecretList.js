import React, { Component } from 'react'
import SecretSummary from './SecretSummary'
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { firebase_constants, form_constants } from '../../config/constants'
import { deleteSecret } from '../../store/actions/secretActions'

const { ROOT_SECRET_COLLECTION, INDIVIDUAL_SECRET_COLLECTION } = firebase_constants
const { SECRET_TITLE_FIELD_ID, SECRET_FIELDS_ARRAY } = form_constants

class SecretList extends Component {

  removeItem = id => {
    this.props.deleteSecret(this.props.auth.uid, id)
  }
  render() {
    const { secrets } = this.props
    const secretList = secrets && secrets.length ? (
        <Collapsible popout >
          {
            secrets.map(secret => {
              return (
                <CollapsibleItem className="white card-title" header={ secret[SECRET_TITLE_FIELD_ID] } key={ secret.id }>
                  <div className="row">
                    <div className="col s12 cyna offset-s11">
                      <i className="material-icons" onClick={() => { this.removeItem(secret.id) } }>{ "delete" }</i>
                    </div>
                  </div>
                  <SecretSummary fields = { secret[SECRET_FIELDS_ARRAY] } />
                </CollapsibleItem>
              )
            })
          }
        </Collapsible>
    ) : (
      <h3 className="teal-text darken-4 center">No Secrets</h3>
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

const mapStateToProps = state => {
  let secrets = [];
  if(state.firestore.ordered[ROOT_SECRET_COLLECTION])
    secrets = state.firestore.ordered[ROOT_SECRET_COLLECTION][0][INDIVIDUAL_SECRET_COLLECTION]
  return {
     secrets,
     auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSecret: (uid, secret_id) => dispatch(deleteSecret(uid, secret_id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
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
