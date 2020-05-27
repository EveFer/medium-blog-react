import React, { Component } from 'react'

// External Packages
import { Link } from 'react-router-dom'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { fullName, email, password } = this.state
    const data = { fullName, email, password }
    this.props.onHandleSendRequest(data)
  }

  render () {
    const { isSignUp } = this.props
    const { fullName, email, password } = this.state

    return (
      <form onSubmit={this.handleSubmit} className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'>
        {
          isSignUp ? (
            <div className='form-group'>
              <label htmlFor='inputFullName'>Full Name</label>
              <input
                className='form-control'
                id='inputFullName'
                aria-describedby='fullNameHelp'
                placeholder='Juan López'
                name='fullName'
                value={fullName}
                onChange={this.handleChange}
              />
            </div>
          ) : null
        }
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='example@example.com'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='***********'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
        </div>

        {
          isSignUp
            ? (
              <div className='d-flex justify-content-around align-items-center'>
                <button type='submit' className='btn btn-primary'>Sign Up</button>
              </div>)
            : (
              <div className='d-flex justify-content-around align-items-center'>
                <button type='submit' className='btn btn-primary'>Sign In</button>
                <Link to='/signup'>Sign Up</Link>
              </div>
            )
        }

      </form>
    )
  }
}
