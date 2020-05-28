import React from 'react'
import Moment from 'react-moment'
import './AsideCard.scss'

function AsideCard({key,counter,title,author,date,time}) {
  return (
    <div className="asideCardInfo">
      <div className="row">
        <div className="col-3 d-flex justify-content-center">
          <h1 className="rankinPopularity ">
            {counter}
          </h1>
        </div>
        <div className="col-9">
          <h2 className="asideTitle">
            {title}
          </h2>
          <h5 className="asideAuthor">
            {author}
          </h5>
          <span className="asideBottomInfo">
            <time><Moment format="MMM , DD">{date}</Moment></time>
            <span>
              . {time} read 
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
    
export default AsideCard