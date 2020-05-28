import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import DetailedPost from './DetailedPost'

import {GetPosts, GetPost} from "../../services/posts";

import './Post.scss';

export default class Post extends Component {
  constructor(props){
    super(props)
      this.state= {
        post:{}
        // category: "",
        // title: "",
        // author: "",
        // description: "",
        // content: "",
        // publication_date: "",
        // estimated_time: "",
        // image: "",
        // tag: "", 
        // imgDetail: ""
      }
      this._renderPost = this._renderPost.bind(this)
  }


  async componentDidMount(){
    try {
      const { id } = this.props.match.params
      const response = await GetPost(id)
      const dataResponse = await response.json()
      console.log(dataResponse.data.post)
      this.setState({
        post : dataResponse.data.post      
      })
    } catch (error) {
      console.log('Error', error)
    }

  }

  _renderPost(){
    const { post } = this.state;
    return <DetailedPost 
    key={post._id}
    category={post.category} 
    title={post.title} 
    description={post.description} 
    author={post.author} 
    content={post.content}
    publication_date={post.publication_date} 
    estimated_time={post.estimated_time} 
    image={post.image}
    tag={post.tag}
    imgDetail={post.imgDetail}
    />
  }

  // _renderPost(){
  //   const { post } = this.state;
  //   return post.map(({category,title,author,description,content,publication_date,estimated_time,image,tag, imgDetail}) => (
  //   <DetailedPost key={_id} 
  //   category={category} 
  //   title={title} 
  //   description={description} 
  //   author={author} 
  //   publication_date={publication_date} 
  //   estimated_time={estimated_time} 
  //   image={image}
  //   />
  //   ))
  // }


  render() {
    return (
      <>
        {this._renderPost()}
      </>
    )
  }
}