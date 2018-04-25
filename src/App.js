import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFormContainer from './components/LoginForm'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Login Form</h1>
        </header>
        <div className="App-body">
            <LoginFormContainer />
        </div>
      </div>
    );
  }
}

export default App;
