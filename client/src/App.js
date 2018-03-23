import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Jokes from './components/Jokes';
import RequireAuth from './components/RequireAuth';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/jokes" component={RequireAuth(Jokes)} />
      </div>
      </Router>
    );
  }
}

export default App;
