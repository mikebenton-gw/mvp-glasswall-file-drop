import React, { Fragment } from "react";
import "../App.css";
import DragAndDrop from "./DragAndDrop";
import RenderResults from "./RenderResults";
import {trackPromise} from "react-promise-tracker";
import {engineApi} from "../api/engineApi";
import LoadingIndicator from "./LoadingIndicator";
import {CSSTransition} from "react-transition-group";
import {fileActions} from "../actions/fileActions";

const initialState = {
  file: "",
  analysisReport: "",
  validation: "",
  fileProcessed: false,
  loading: false
};

class ProcessFile extends React.Component {
  state = initialState;

  onApiKeyChange = event => {
      this.setState({apiKey: event.target.value});
  }

  resetState() {
    this.setState(initialState);
  }

  handleDrop = file => {
    this.resetState();

    if(!fileActions.validFileSize(file[0])){
      this.setState({validation: "Please use a file under 20MB"});
      return;
    }

    trackPromise(
      fileActions.validFileType(this.props.apiKey, file[0]).then(result => {
        if (!result.ValidKey || !result.ValidFileType){
          this.setState({validation: result.Message});
          return;
        }

        return engineApi.analyseFile(file[0])
      })
      .then(result => {
          var XMLParser = require("react-xml-parser");
          var xml = new XMLParser().parseFromString(result.analysisReport);

          this.setState({
            analysisReport: xml,
            file: file[0],
            fileProcessed: true
          });
      })
      .catch(error => {
        console.log(error);
      })
    );
  };

  render() {
    return (
        <Fragment>
            <h1>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</h1>
            <DragAndDrop handleDrop={this.handleDrop}>
                <div className="loading-container">
                    <LoadingIndicator key={6} />
                </div>
            </DragAndDrop>
            <h4>Api Key: {this.props.apiKey}</h4>
            <CSSTransition in={this.state.fileProcessed} timeout={{enter: 500, exit: 500}} classNames="results">
                <RenderResults key={5} file={this.state.file} analysisReport={this.state.analysisReport} validation={this.state.validation}/>
            </CSSTransition>
        </Fragment>
    );
  }
}

export default ProcessFile;