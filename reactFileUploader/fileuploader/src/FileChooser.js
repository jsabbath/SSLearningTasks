import React from 'react';
import { Component } from 'react'; 
import ReactDom from 'react-dom';

class FileChooser extends Component {
  render() { 
    return ( <div className = "upButton">
    <input type = "file" name="file"/>
    </div>
    );
  }
}

export default FileChooser