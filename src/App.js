import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Home from './pages/home.js';
import Account from './pages/account.js';
import Header from './components/header/header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => (<Home />)} />
          <Route exact path="/account" render={() => (<Account />)} />
        </div>
      </Router>
    );
  }
}

export default App;
