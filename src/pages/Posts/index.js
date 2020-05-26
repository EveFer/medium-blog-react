import React, { Component } from 'react'

// Components
import Navbar from '../../components/Navbar'
import Cards from '../../components/MiddleSection'
import Banner from '../../components/Banner'

export default class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
