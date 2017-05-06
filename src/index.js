import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Table from './Table/table.js';
//import { Router, Route, Link} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
ReactDOM.render(
  (
  <BrowserRouter>
    <Route path="/" component={App}>
    </Route>
  </BrowserRouter>
),document.getElementById('root')
);
