import React, { useState, useEffect } from 'react'
import './App.scss'

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Posts from './pages/Posts'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'

// components
import NotFound from './components/NotFound'
import Header from './components/Header'

function App () {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    const authToken = window.localStorage.getItem('authToken')
    if (authToken) {
      setIsUserLoggedIn(true)
    }
  }, [])

  const logOut = () => {
    window.localStorage.removeItem('authToken')
    setIsUserLoggedIn(false)
  }

  return (
    <Router>
      <div className='container'>
        <Header isAuthenticated={isUserLoggedIn} logOut={logOut} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/posts'>
            <Posts isAuthenticated={isUserLoggedIn} />
          </Route>
          <Route exact path='/post/:id'>
            <Post isAuthenticated={isUserLoggedIn} />
          </Route>
          <Router exact path='/create-post'>
            <CreatePost />
          </Router>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
