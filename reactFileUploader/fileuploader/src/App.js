import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UpButton from './ButtonComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            File Uploader 
          </p>
          <p><button type="button">Browse</button></p>
          <p><UpButton/></p>
        </header>
      </div>
    );
  }
}

export default App;
