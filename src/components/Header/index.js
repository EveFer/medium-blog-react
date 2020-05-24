import React from 'react'

import logo from '../../assets/img/logo medium-desktop.png'
import avatar from '../../assets/img/avatar.png'

import './Header.scss'

function Header(props) {
    return (
        <div className="row">
          <div className="col-12">
            {/* Aqui componente Header - Fer */}
            <header className="d-flex justify-content-between">
              <div className="p-3 ">
                <img class="logo-medium d-none d-md-block" src={logo} alt="logo" />
                <i className="fab fa-medium d-md-none"></i>
              </div>
              <div className="mt-2 d-flex align-items-center">
                <i id="view" data-toggle="tooltip" title="Search Medium" className="fas fa-search mobile-distribution margin-right"></i>
                <input 
                  id="ocultar" 
                  type="text" 
                  placeholder="Search Medium"
                  className="rounded border-dark text-center border-0 btn-busqueda mr-2" 
                />
                <i data-toggle="tooltip" title="Bookmarks" className="far fa-bookmark d-none d-md-block "></i>
                <i data-toggle="tooltip" title="Notifications" className="far fa-bell margin-right"></i>
                <button 
                  type="button"
                  className="btn rounded upgrade-header border border-dark d-none d-md-block mr-2 ">Upgrade</button>
                <img class="avatar-medium margin-right " src={avatar} alt=""></img>
              </div>
            </header>
          </div>
        </div>
    )
}

export default Header