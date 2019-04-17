import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './components/main-page.js'
import LoginForm from './components/login-form.js'
import CreateAccount from './components/create-account.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/createAccount" component={CreateAccount}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
