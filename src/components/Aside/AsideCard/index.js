import React from 'react'

import './AsideCard.scss'

function AsideCard(props) {
  return (
    <div className="asideCardInfo">
      <div className="row">
        <div className="col-3">
          <h1 className="rankinPopularity">
            01
          </h1>
        </div>
        <div className="col-9">
          <h2 className="asideTitle">
            My journey Toward Radical Body Positivity
          </h2>
          <h5 className="asideAuthor">
            Autor
          </h5>
          <span className="asideBottomInfo">
            <time>18/03/1992 </time>
            <span>
              . 10 min read 
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
    
export default AsideCard