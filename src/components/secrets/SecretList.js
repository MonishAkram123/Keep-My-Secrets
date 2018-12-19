import React, { Component } from 'react'
import SecretSummary from './SecretSummary'
import Collapsible from 'react-collapsible'
class SecretList extends Component {
  state = {
    secrets: [
      { id: '1', title: 'Gmail', fields: [
        { id: '1', name: 'email', value: 'monishakram123@gmail.com' },
        { id: '2', name: 'password', value: 'akram12345' }
      ]},
      { id: '2', title: 'Github', fields: [
        { id: '1', name: 'username', value: 'MonishAkram123' },
        { id: '2', name: 'password', value: '12345' }
      ]}
    ]
  }
  render() {
    return ("")
  }
}

export default SecretList
