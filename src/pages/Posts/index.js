import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import Cards from '../../components/MiddleSection'

import { Link } from "react-router-dom";
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
        <Cards/>  
      </>
    )
  }
}
