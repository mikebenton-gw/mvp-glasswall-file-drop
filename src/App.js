import React from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop'
import RenderResults from './RenderResults'
import logo from './logo.svg';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from './api/engineApi';
import LoadingIndicator from './LoadingIndicator';
import Modal from './Modal';
import { CSSTransition } from 'react-transition-group';

const initialState = {
  file: "",
  analysisReport: "",
  validation: "",
  fileProcessed: false,
  loading: false,
  showModal: false
};

class App extends React.Component {
  state = initialState;

  resetState(){
    this.setState(initialState);
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
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
          file: file[0],
          fileProcessed: true,
        });
      })
      .catch((error) => {
        console.log(error)
      }));
   }

  render() {
    const results = <RenderResults key={5} file={this.state.file} analysisReport={this.state.analysisReport} validation={this.state.validation}/> ;
    const spinner = <LoadingIndicator key={6} /> ;
    const modal =  <Modal modalState={this.state.showModal} key={7}/>

    return (
      <div className="app">
        <div className="app-header">
          <div className="logo"><img src={logo} alt="Logo" height="90" /></div>
          <button onClick={this.openModal}></button>
        </div>

        <div className="app-body">
          <h1>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</h1>

          <DragAndDrop handleDrop={this.handleDrop}>
            <div className="loading-container">
                    {spinner}
            </div>
          </DragAndDrop>
          <CSSTransition in={this.state.fileProcessed} timeout={500} classNames="results">
                {results}
          </CSSTransition>   
        </div>
        <CSSTransition in={this.state.showModal} timeout={500} classNames="modal">
           {modal}
        </CSSTransition> 
      </div>
      
    );
  }
}

export default App;
