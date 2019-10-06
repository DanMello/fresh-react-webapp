import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import AppRouter from './routes';
import history from './history';
import 'styles/index.css';

ReactDOM.render(
  <Router history={history}>
    <AppRouter />
  </Router>,
  document.getElementById('root'));