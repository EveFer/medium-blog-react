import React from 'react'

import './Navbar.scss'

function Navbar (props) {
  return (
    <div className='row'>
      <div class='col-12 d-flex justify-content-between'>
        <div>
          <i id='boton-prueba' class='fas fa-angle-left  button-direction' />
        </div>
        <div class='scrollmenu'>
          <a class=' mx-3 ' id='scroll-left' href='#'>HOME</a>
          <a class=' mx-3' href='#'>CORONAVIRUSBLOG</a>
          <a class=' mx-3' href='#'>ONEZERO</a>
          <a class=' mx-3' href='#'>ELEMENTAL</a>
          <a class=' mx-3' href='#'>GEN</a>
          <a class=' mx-3' href='#'>ZORA</a>
          <a class=' mx-3' href='#'>FORGE</a>
          <a class=' mx-3' href='#'>HUMANPARTS</a>
          <a class=' mx-3' href='#'>MARKER</a>
          <a class=' mx-3' href='#'>LEVEL</a>
          <a class=' mx-3' href='#'>HEATED</a>
          <a class=' mx-3' href='#'>MORE</a>
        </div>
        <div>
          <i id='boton-prueba2' class='fas fa-angle-right button-direction' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
