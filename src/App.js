import React from 'react';
import './App.scss';

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="container"></div>
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
