import React, { Component } from 'react'

// External Packages
import { Redirect } from 'react-router-dom'

// Components
import Navbar from '../../components/Navbar'
import Cards from '../../components/MiddleSection'
import Banner from '../../components/Banner'

export default class Posts extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { isAuthenticated } = this.props
    return (
      <>
        {
          isAuthenticated ? (
            <>
              <Navbar />
              <Banner />
              <Cards />
            </>
          ) : null
        }
      </>
    )
  }
}
