import React, { useState, useEffect, Component } from "react";


import Aside from '../../components/Aside';


import './Cards.scss';
import Post from './Post';
import {GetPosts, GetPost} from "../../services/posts";



export default class Cards extends Component{
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    this._renderPosts = this._renderPosts.bind(this)
  }

  async componentDidMount(){
    try {
      const response = await GetPosts()
      const dataResponse = await response.json()
      console.log(dataResponse.data.posts)
      this.setState({
        posts : dataResponse.data.posts      
      })
    } catch (error) {
      console.log('Error', error)
    }

  }
  _renderPosts(){
    const { posts } = this.state;
    return posts.map(({_id,category,title,description,author,publication_date,estimated_time,image}) => (
    <Post key={_id}
    id={_id} 
    category={category} 
    title={title} 
    description={description} 
    author={author} 
    publication_date={publication_date} 
    estimated_time={estimated_time} 
    image={image}
    />
    ))
  }

  render(){
    return (
      <div className="row">
        <div className="col-lg-8 col-md-12">
          {this._renderPosts()}
        </div>
      <div className="col-lg-4 col-md-12">
        <Aside/>
      </div>
    </div>
    )
  }
} 
