import React from 'react'
import { useLocation } from 'react-router-dom'

import imgNotFound from '../../assets/img/notFound.png'

function NotFound () {
  const location = useLocation()
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <img className='img-fluid' src={imgNotFound} alt='img' />
      <h3>
        <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default NotFound
