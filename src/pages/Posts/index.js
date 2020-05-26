import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Cards from '../../components/MiddleSection'
import Banner from '../../components/Banner'

export default class Posts extends Component {
  render () {
    return (
      <>
        <Header isAuthenticated />
        <Navbar />
        <Banner />
        <Cards />
      </>
    )
  }
}
