import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route, Link, Navigate, Redirect } from "react-router-dom";
import SignIn from './views/SignIn';
import Menu from './views/Menu';
import Agendamiento from './views/Agendamientos';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Redirect from="/" exact={true} to="/login" />
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/agendar">
          <Agendamiento />
        </Route>



        {/* <Route path="/menu" component={<Menu/>} /> */}
      </Switch>


    </Router>



  );
}

export default App;