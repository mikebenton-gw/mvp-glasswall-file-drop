import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallApi from './CallApi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Drag and drop a file to have it processed by the Glasswall Engine
        </p>
        <CallApi />
      </header>
    </div>
  );
}

export default App;
