import React from 'react';
import { Component } from 'react'; 
import ReactDom from 'react-dom';

class UpButton extends Component {
  render() { 
    return ( <div className = "upButton">
    <button type = "button" value = "Upload">Upload</button>
    </div>
    );
  }
}

export default UpButton