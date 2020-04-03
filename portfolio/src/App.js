import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import NotFound from './Containers/NotFound';
import Home from './Containers/Home';
import About from './Containers/About';
import ContactMe from './Containers/ContactMe';
import Projects from './Containers/Projects';

import './CSS/gradient.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={ContactMe} />
        <Route exact path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
