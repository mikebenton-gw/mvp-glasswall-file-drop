import React from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop'
import RenderResults from './RenderResults'
import logo from './logo.svg';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from './api/engineApi';
import LoadingIndicator from './LoadingIndicator';

class App extends React.Component {
  state = {
    file: "",
    analysisReport: ""
  }

  handleDrop = (file) => {
    var data = new FormData();
    data.append('file', file[0]);

    trackPromise(
      engineApi.analyseFile(data)
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
      }));
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
            <div style={{height: 300, width: 500}} >
              <LoadingIndicator />
            </div>
          </DragAndDrop>

          <RenderResults file={this.state.file} analysisReport={this.state.analysisReport} />
        </body>
      </div>
    );
  }
}

export default App;
