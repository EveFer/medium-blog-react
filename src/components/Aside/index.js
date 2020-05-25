import React from 'react'

import './Aside.scss'
import AsideCard from './AsideCard'

function Aside(props) {
    return (
      <div className="">
        <div className="row">
          <div className="col-12">
            <div className="popularMedium">
              <h3>
                Popular on Medium
              </h3>
            </div>
            <div id='scroll'>
            <AsideCard/>
            <AsideCard/>
            <AsideCard/>
            <div className="links-footer">
              <div className="row">
                <div className="col-18">
                    <a href="#">Help</a>
                    <a href="#">Status</a>
                    <a href="#">Writers</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>
                <div>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">About</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}
    
export default Aside