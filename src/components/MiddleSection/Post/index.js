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
                <div className="d-flex justify-content-end">
                  <i class="far fa-bookmark m-2"></i>
                  <i class="fas fa-ellipsis-h m-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="cardImage d-flex justify-content-center" >
              <img src={"https://picsum.photos/110/110"} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    )
}
    
export default Post