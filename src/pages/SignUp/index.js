import React, { Component } from 'react'

import Header from '../../components/Header'
import Form from '../../components/Form'

import './SignUp.scss'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <>
        <Header isAuthenticated={false} />
        <div className='row mt-10'>
          <div className='col-6 mx-auto'>
            <Form isSignUp />
          </div>
        </div>
      </>
    )
  }
}
