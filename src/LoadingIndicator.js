import { usePromiseTracker } from 'react-promise-tracker';
import React from 'react';
import Loader from 'react-loader-spinner';

function LoadingIndicator(props) {
  const { promiseInProgress } = usePromiseTracker();
  return(
    promiseInProgress &&
    <div className="loader">
      <Loader type="ThreeDots" color="#286286" height={100} width={100} />
    </div>);
}

export default LoadingIndicator;
