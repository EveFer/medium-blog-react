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
          <Route exact path='/posts/:id' />
        </Switch>
      </div>
    </Router>
  )
}
export default App
