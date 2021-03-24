import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Context from './Global/Context';
import Auth from './components/Auth';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Context>
        <Header/> 
        <Route exact path="/">
          <Auth/> 
        </Route>
      </Context>
    </Router>
  );
}

export default App;
