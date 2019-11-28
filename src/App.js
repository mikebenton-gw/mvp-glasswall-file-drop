import React from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop'
import RenderResults from './RenderResults'
import logo from './logo.svg';

class App extends React.Component {
  state = {
    file: "",
    analysisReport: ""
  }

  handleDrop = (file) => {
    var data = new FormData();
    data.append('file', file[0]);

    fetch("https://glasswall-file-drop-api.azurewebsites.net/api/sas/FileAnalysis", {
    method: 'POST',
    body: data})
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      else {
        throw new Error('Something went wrong');
      }
    })
    .then((result) => {
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(result.analysisReport);

        this.setState({
          isLoaded: true,
          analysisReport: xml,
          file: file[0]
        });
      })
      .catch((error) => {
        console.log(error)
      });
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo"><img src={logo} alt="Logo" height="90" /></div>
        </header>
        <body className="App-body">
          <p>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</p>
          <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 500}} />
          </DragAndDrop>
          <RenderResults file={this.state.file} analysisReport={this.state.analysisReport} />
        </body>
      </div>
    );
  }
}

export default App;
