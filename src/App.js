import React from 'react';
import './App.css';
import {
  Home,
  BookNow,
  Fleet
} from './containers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Fleet} path="/fleet" />
          <Route component={BookNow} path="/book-now" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
