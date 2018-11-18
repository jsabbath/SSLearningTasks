import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UpButton from './UpButton.js';
import FileChooser from './FileChooser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            File Uploader 
          </p>
          <p><FileChooser/>
          <UpButton/></p>
        </header>
      </div>
    );
  }
}

export default App;
