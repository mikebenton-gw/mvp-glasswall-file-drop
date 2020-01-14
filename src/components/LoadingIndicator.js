import {usePromiseTracker} from "react-promise-tracker";
import React from "react";

function LoadingIndicator() {
  const {promiseInProgress} = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    )
  );
}

export default LoadingIndicator;
