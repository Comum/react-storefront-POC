import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Home from './pages/home.js';
import Account from './pages/account.js';
import Header from './components/header/header.js';

import HomeContainer from './containers/homeContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/account" render={() => (<Account />)} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
