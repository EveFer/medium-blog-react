import React from 'react'


import Aside from '../../components/Aside'

import './Cards.scss'
import Post from './Post'

function Cards(props) {
    return (
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <Post/>
          <Post/>
          <Post/>
        </div>
      <div className="col-lg-4 col-md-12">
        <Aside/>
      </div>
    </div>


    )
}
    
export default Cards