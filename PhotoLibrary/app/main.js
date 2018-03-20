// import 'babel-polyfill';
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js');
require('es6-promise');
require('fetch-ie8');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configure from './store/configureStore';
import RouTe from './router';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      { RouTe }
    </Router>
  </Provider>,
  document.getElementById('main')
);
