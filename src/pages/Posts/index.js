import React, { Component } from 'react'

// Components
import Header from '../../components/Header'

export default class Posts extends Component {
  render () {
    return (
      <>
        <Header isAuthenticated />

        <div className='row'>
          <div className='col-12'>
            {/* Aqui componente Navbar - Noe */}
            NAVBAR
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            {/* Aqui componente Banner - Marce */}
            MARCE
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            {/* Aqui componente Banner - Marce */}
            MARCE 1
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            {/* Aqui componente Banner - Marce */}
            MARCE 2
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-lg-8'>
            {/* Aqui componente MiddleSection - Gerardo */}
              GERRARDO
          </div>
          <div className='col-12 col-lg-4'>
            {/* Aqui componente MiddleSection - Gerardo */}
              GERARDO
          </div>
        </div>
      </>
    )
  }
}
