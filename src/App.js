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

function App() {
  return (
    <Router>
      <div className="container">
        <Posts />
        {/* <Switch>
            <Route exact path="/" >
            </Route>
            <Route exact path="/login" >
            </Route>
            <Route exact path="/posts" >
            </Route>
            <Route exact path="/posts/:id" >
            </Route>
        </Switch> */}
      </div>
    </Router>
  );
}
export default App;
