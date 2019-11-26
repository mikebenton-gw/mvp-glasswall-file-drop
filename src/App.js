import React from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop'
import RenderResults from './RenderResults'

class App extends React.Component {
  state = {
    file: "",
    analysisReport: ""
  }

  handleDrop = (file) => {

    this.setState({
      file: file[0]
    });

    var data = new FormData();
    data.append('file', file[0]);

    fetch("https://glasswall-file-drop-api.azurewebsites.net/api/sas/FileAnalysis", {
    method: 'POST',
    body: data})
    .then((res) => res.json())
    .then((result) => {
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(result.analysisReport);    // Assume xmlText contains the example XML

        this.setState({
          isLoaded: true,
          analysisReport: xml
        });

      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</p>
          <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 500}} />
          </DragAndDrop>
          <RenderResults file={this.state.file} analysisReport={this.state.analysisReport} />
        </header>
      </div>
    );
  }
}

export default App;
