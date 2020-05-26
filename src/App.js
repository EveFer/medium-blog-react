import React from 'react'
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


function App () {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/posts'>
            <Posts />
          </Route>
          <Route exact path='/post/:id' >
            <Post/>
          </Route>
          <Router exact path='/create-post'>
            <CreatePost/>
          </Router>
        </Switch>
      </div>
    </Router>
  )
}
export default App
