import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import AppBar from './ui/AppBar/AppBar';
import * as color from './Colors.js';
import FootBar from './ui/FootBar/FootBar';
import 'font-awesome/css/font-awesome.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import routes from './routes/routes';
let deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = deviceWidth / 10 + 'px';
window.addEventListener('resize', (e) => {
  let deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = deviceWidth / 10 + 'px';
})



ReactDOM.render((
  <Router>
    <div>
      {routes.map((route, index) => (

        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
      <FootBar />
    </div>
  </Router>
), document.getElementById('root'))