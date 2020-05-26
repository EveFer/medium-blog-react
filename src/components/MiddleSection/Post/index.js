import React from 'react'
import {Redirect} from 'react-router-dom'

import './Post.scss'


function Post({key,category,title,description,author,publication_date,estimated_time,image}) {

  const sendDetail = () =>{
    return <Redirect to={`/post/${key}`}/>
  }

    return (
      <div className="card border-0" onClick={sendDetail}>
        <div className="row">
          <div className="col-8">
            <h5 className="cardSubject">
              {category}
            </h5>
            <h2 className="cardTitle">
              {title}
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
                  <span className="cardBottomInfo"><time>{publication_date} </time><span> . </span> {estimated_time} read <span></span></span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-end">
                  <i class="far fa-bookmark m-2"></i>
                  <i class="fas fa-ellipsis-h m-2"></i>
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