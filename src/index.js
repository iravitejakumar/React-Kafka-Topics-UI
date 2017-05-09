import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CustomTable from './Table/table.js';
//import { Router, Route, Link} from 'react-router';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
ReactDOM.render(
  (
  <BrowserRouter>
   <App>
     <Switch>
    <Route path="/table" component={CustomTable}>
    </Route>
    </Switch>
    </App>
  </BrowserRouter>
),document.getElementById('root')
);
