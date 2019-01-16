import React, { Component } from 'react';
import BulkMetadataButton from './BulkMetadataButton.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			
        
          <p>
            Edit <code>src/App.js</code> and save to reload.
			<BulkMetadataButton/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;