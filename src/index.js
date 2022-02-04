import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import fireDB from './FireBase'
import {Provider} from 'react-redux';
import store from '../src/Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

