import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { globalStyle } from '../../variables/global-style';
import Header from '../Header/Header';
import HomeContainer from '../Home/Home-container';
import SignIn from '../SignIn/Sign-in';
import Register from '../Register/Register';

injectGlobal`${globalStyle}`;

const App = props => (
  <Provider store={props.store}>
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/signIn" render={() => (<SignIn />)} />
        <Route exact path="/register" render={() => (<Register />)} />
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
