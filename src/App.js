import React from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop'
import RenderResults from './RenderResults'
import logo from './logo.svg';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from './api/engineApi';
import LoadingIndicator from './LoadingIndicator';

const initialState = {
  file: "",
  analysisReport: "",
  validation: ""
};

class App extends React.Component {
  state = initialState;

  resetState(){
    this.setState(initialState);
  }

  handleDrop = (file) => {
    this.resetState();

    if (file[0].size > 20000000){
      this.setState({
        validation: "Please use a file under 20MB"
      })
      return;
    }

    var data = new FormData();
    data.append('file', file[0]);

    trackPromise(
      engineApi.analyseFile(data)
      .then((result) => {
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(result.analysisReport);

        this.setState({
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
        <div className="App-header">
          <div className="logo"><img src={logo} alt="Logo" height="90" /></div>
        </div>

        <div className="App-body">
          <p>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</p>

          <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 500}} >
              <LoadingIndicator />
            </div>
          </DragAndDrop>
          <RenderResults file={this.state.file} analysisReport={this.state.analysisReport} validation={this.state.validation}/>
        </div>
      </div>
    );
  }
}

export default App;
