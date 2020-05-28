import React from 'react'

import logo from '../../assets/img/logo medium-desktop.png'
import avatar from '../../assets/img/avatar.png'

// External Packages
import { Link, useHistory } from 'react-router-dom'

import './Header.scss'

function Header ({ isAuthenticated, logOut }) {
  const history = useHistory()
  const path = isAuthenticated ? '/posts' : '/'

  const logOutUser = () => {
    if (window.localStorage.getItem('authToken')) {
      logOut()
      history.push('/')
    }
  }
  return (
    <div className='row'>
      <div className='col-12'>
        <header className='d-flex justify-content-between'>
          <div className='p-3'>

            <Link to={path}>
              <img className='logo-medium d-none d-md-block' src={logo} alt='logo' />
            </Link>

            <i className='fab fa-medium d-md-none' />
          </div>
          {
            isAuthenticated ? (
              <div className='mt-2 d-flex align-items-center'>
                <i id='view' data-toggle='tooltip' title='Search Medium' className='fas fa-search mobile-distribution margin-right' />
                <input
                  id='ocultar'
                  type='text'
                  placeholder='Search Medium'
                  className='rounded border-dark text-center border-0 btn-busqueda mr-2'
                />
                <i data-toggle='tooltip' title='Bookmarks' className='far fa-bookmark d-none d-md-block ' />
                <i data-toggle='tooltip' title='Notifications' className='far fa-bell margin-right' />
                <button
                  type='button'
                  className='btn rounded upgrade-header border border-dark d-none d-md-block mr-2 '
                >Upgrade
                </button>
                <Link className='btn btn-success rounded upgrade-header mr-2' to='/create-post'>Create Post</Link>
                <button className='btn btn-secondary rounded upgrade-header mr-2' onClick={logOutUser}>Log Out</button>
                <img className='avatar-medium margin-right ' src={avatar} alt='' />
              </div>

            ) : (
              <div className='mt-2 d-flex w-50 align-items-center justify-content-between wrapper-links'>
                <Link to='/subscribe'>Subscribe</Link>
                <Link to='/write'>Write</Link>
                <Link to='/SignIn'>Sign in</Link>
                <button
                  type='button'
                  className='btn-get-started upgrade-header d-none d-md-block mr-2 '
                >Get started
                </button>
              </div>
            )
          }
        </header>
      </div>
    </div>
  )
}

export default Header
