import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {hot} from 'react-hot-loader';
import Home from 'components/Home';
import 'styles/APP.scss';
const APP = () => (
  <Router>
    <div id='app-container'>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
  
);
export default hot(module)(APP);