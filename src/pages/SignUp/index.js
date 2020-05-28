import React, { Component } from 'react'

// services
import { createAccount } from '../../services/users'

// // // Css
// import 'SignUp'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      success: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()
    const { name, email, password } = this.state
    const data = {
      name,
      email,
      password
    }
    const response = await createAccount(data)
    const responseJSON = await response.json()
    if (responseJSON.success) {
      this.setState({
        success: true
      })
    } else if (!responseJSON.success) {
      this.setState({
        success: false
      })
    }
  }

  render () {
    const { name, email, password, success } = this.state
    if (success) {
      window.location.href = '/'
    } else if (!success) {
      console.log('no son tus datos')
    }
    return (
      <div className='row mt-10'>
        <div className='col-6 mx-auto'>
          <form onSubmit={this.handleSubmit} className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Nombre completo</label>
              <input
                value={name}
                onChange={this.handleInput}
                name='name'
                placeholder='name'
                id='exampleInputEmail1'
                class='form-control'
                aria-describedby='emailHelp'
              />
            </div>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Correo electronico</label>
              <input
                value={email}
                onChange={this.handleInput}
                name='email'
                placeholder='email'
                id='exampleInputEmail1'
                class='form-control'
                aria-describedby='emailHelp'
              />
            </div>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Contraseña</label>
              <input
                Type='password'
                value={password}
                onChange={this.handleInput}
                name='password'
                placeholder='password'
                id='exampleInputEmail1'
                class='form-control'
                aria-describedby='password'
              />
            </div>
            <button type='submit' class='btn btn-primary'>Sign Up</button>
          </form>

        </div>
      </div>

    )
  }
}
