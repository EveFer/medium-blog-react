import React, { Component } from 'react'

// External Packages
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import './Home.scss'
export default class Home extends Component {
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
          <div className='col-6'>
            <h2 class='title-principal'>Get smarter about what matters to you.</h2>
            <h2 class='title-secondary mt-5'>Select what you're into. We'll help you find great things to read.</h2>
          </div>
          <div className='col-6'>
            <form className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='example@example.com' />
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Password</label>
                <input type='password' class='form-control' id='exampleInputPassword1' placeholder='***********' />
              </div>
              <div className='d-flex justify-content-around align-items-center'>
                <button type='submit' class='btn btn-primary'>Sign In</button>
                <Link to='/signup'>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
