import React, { useState, useEffect, Component } from 'react';
import './Aside.scss'
import AsideCard from './AsideCard'
import { GetPosts, GetPost } from '../../services/posts';

export default class Aside extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularPosts: []
    }
    this._renderPopularPosts = this._renderPopularPosts.bind(this)
  }

  async componentDidMount () {
    try {
      const token = window.localStorage.getItem('authToken')
      const response = await GetPosts(token)
      const dataResponse = await response.json()
      console.log(dataResponse.data.posts)
      this.setState({
        popularPosts: dataResponse.data.posts
      })
    } catch (error) {
      console.log('Error', error)
    }
  }

  _renderPopularPosts () {
    const { popularPosts } = this.state
    console.log(popularPosts)

    return popularPosts.map(({ _id, title, author, publication_date, estimated_time }, index) => (
      <AsideCard
key={_id}
        counter={index + 1}
        title={title}
        author={author}
        date={publication_date}
        time={estimated_time}
      />
    ))
  }

  render () {
    return (
      <div className=''>
        <div className='row'>
          <div className='col-12'>
            <div className='popularMedium'>
              <h3>
                Popular on Medium
              </h3>
            </div>
            <div id='scroll'>
              {this._renderPopularPosts()}
              <div className='links-footer'>
                <div className='row'>
                  <div className='col-18'>
                  <a href='#'>Help</a>
                  <a href='#'>Status</a>
                  <a href='#'>Writers</a>
                  <a href='#'>Blog</a>
                  <a href='#'>Careers</a>
                  </div>
                  <div>
                  <a href='#'>Privacy</a>
                  <a href='#'>Terms</a>
                  <a href='#'>About</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

