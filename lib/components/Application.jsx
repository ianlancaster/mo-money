import React, { Component } from 'react'
import { pick, map, extend, filter } from 'lodash'
import moment from 'moment'
import firebase, { reference, signIn, signOut } from '../firebase'
import SignedInContainer from '../containers/SignedInContainer'
import SignedOutContainer from '../containers/SignedOutContainer'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    const user = this.state.user

    return (
      <div className="sign-in-out">
        {user ?
          <SignedInContainer /> :
          <SignedOutContainer /> // eslint-disable-line
        }
      </div>
    )
  }
}
