import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './store/reducers'
import { accountLoggedIn } from './store/actions'

const store = createStore(reducers, applyMiddleware(thunk))

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root'), // eslint-disable-line
  )
}

render(App)
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    const NextApp = require('./components/App/App.js').default // eslint-disable-line
    render(NextApp)
  })
}

store.dispatch(accountLoggedIn());
