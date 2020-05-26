import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Form from '../../components/Form'

// services

import { logIn as logInService } from '../../services/users'

import './Home.scss'
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false
    }
    this.handleSendRequest = this.handleSendRequest.bind(this)
  }

  async handleSendRequest (credentials) {
    try {
      const response = await logInService(credentials)
      const responseJSON = await response.json()
      console.log(responseJSON)
      const { success, data } = responseJSON
      if (success) {
        window.localStorage.setItem('authToken', data.token)
        this.setState({
          isLogged: true
        })
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  render () {
    const { isLogged } = this.state
    return (
      <>
        {
          isLogged ? (
            window.location.href = '/posts'
          ) : (
            <div className='row mt-10'>
              <div className='col-6'>
                <h2 className='title-principal'>Get smarter about what matters to you.</h2>
                <h2 className='title-secondary mt-5'>Select what you're into. We'll help you find great things to read.</h2>
              </div>
              <div className='col-6'>
                <Form isSignUp={false} onHandleSendRequest={this.handleSendRequest} />
              </div>
            </div>
          )
        }
      </>
    )
  }
}
