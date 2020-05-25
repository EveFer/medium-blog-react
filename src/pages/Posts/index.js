import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import Banner from '../../components/Banner'

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

        <Banner />

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
