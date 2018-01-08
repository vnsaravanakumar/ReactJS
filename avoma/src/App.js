import React, { Component } from 'react';
import BackChannel from './component/BackChannel/BackChannel';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './avoma_logo.png';
import avoma from './avoma.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router component={App} path="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={avoma} className="App-name" alt="logo" />
          <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    </ul>
                </div>
            </div>
          </nav>
        </header>

        <Route path="/" component={BackChannel}/>
        <Route exact path="/backChannel/" component={BackChannel}/>
      </div>
      </Router>
    );
  }
}

export default App;
