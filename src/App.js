import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileList from './FileList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Drag and drop test
        </p>
        <FileList />
      </header>
    </div>
  );
}

export default App;
