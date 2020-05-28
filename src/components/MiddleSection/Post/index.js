import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import Moment from 'react-moment'

import './Post.scss'


function Post({key,id,category,title,description,author,publication_date,estimated_time,image}) {

    return (
      <div className="card border-0" >
        <div className="row">
          <div className="col-8">
            <h5 className="cardSubject">
              {category}
            </h5>
            <h2 className="cardTitle" >
              <Link to={`/post/${id}`}>
              {title}
              </Link>
            </h2>
            <h5 className="cardDescription">
              {description}
            </h5>
            <div className="row">
              <div className="col-8">
                <div className="d-flex flex-column">
                  <h5 className="cardAuthor">
                    {author}
                  </h5>
                  <span className="cardBottomInfo"><time><Moment format="MMM , DD">{publication_date}</Moment> </time><span> . </span> {estimated_time} read <span></span></span>
                </div>
              </div>
            <div className='col-4'>
              <div className='d-flex justify-content-end'>
                <i class='far fa-bookmark m-2' />
                <i class='fas fa-ellipsis-h m-2' />
              </div>
            </div>
            </div>
          </div>
          <div className="col-4">
            <div className="cardImage d-flex justify-content-center" >
              <img src={image} alt=""></img>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Post
