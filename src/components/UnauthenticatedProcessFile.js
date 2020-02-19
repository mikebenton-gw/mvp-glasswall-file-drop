import React, { Fragment } from "react";
import "../App.css";
import DragAndDrop from "./DragAndDrop";
import LoadingIndicator from "./LoadingIndicator";

function UnauthenticatedProcessFile() {

  var handleDrop = file => {
    
  };

    return (
        <Fragment>
            <h1>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</h1>
            <DragAndDrop handleDrop={handleDrop}>
                <div className="loading-container">
                    <LoadingIndicator key={6} />
                </div>
            </DragAndDrop>
        </Fragment>
    );
  }

export default UnauthenticatedProcessFile;