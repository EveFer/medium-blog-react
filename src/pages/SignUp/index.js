import React, { Component } from 'react'

import Header from '../../components/Header'

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
            <form className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'>
              <div className='form-group'>
                <label htmlFor='inputFullName'>Full Name</label>
                <input type='' className='form-control' id='inputFullName' aria-describedby='fullNameHelp' placeholder='Juan López' />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='example@example.com' />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input type='password' className='form-control' id='exampleInputPassword1' placeholder='***********' />
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <button type='submit' className='btn btn-primary'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
