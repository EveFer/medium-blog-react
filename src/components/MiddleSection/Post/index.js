import React from 'react'


import './Post.scss'

function Post(props) {
    return (
      <div className="card border-0">
        <div className="row">
          <div className="col-8">
            <h5 className="cardSubject">
              BASED ON YOUR READING HISTORY
            </h5>
            <h2 className="cardTitle">
              LEARN HOW to Quickly Create Uls in Python
            </h2>
            <h5 className="cardDescription">
              Finally a library you can pick up under 10 minutes
            </h5>
            <div className="row">
              <div className="col-8">
                <div className="d-flex flex-column">
                  <h5 className="cardAuthor">
                    Costas Andreou in Towards Data Science
                  </h5>
                  <span className="cardBottomInfo"><time>Dec,2019 </time><span> . </span> 5 min read <span></span></span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex ">
                  <i class="far fa-bookmark"></i>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div >
              <img  className="cardImage" src={"https://picsum.photos/100/100"} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    )
}
    
export default Post