import React from 'react';
import './App.scss';

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages
import Posts from './pages/Posts'
import Post from './pages/Post'


function App() {
  return (
    <Router>
      <div className="container">
        <Post />
        {/* <Switch>
            <Route exact path="/" >
            </Route>
            <Route exact path="/login" >
            </Route>
            <Route exact path="/posts" >
            </Route>
            <Route exact path="/posts/:id" >
              <Posts/>
            </Route>
        </Switch> */}
      </div>
    </Router>
  );
}
export default App;
