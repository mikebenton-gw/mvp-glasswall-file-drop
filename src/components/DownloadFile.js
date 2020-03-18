import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from '../api/engineApi';

class DownloadFile extends React.Component {
	getProtectedFile = () => {
		trackPromise(
      engineApi.protectFile(this.props.file)
			.then(blob => {
				let url = window.URL.createObjectURL(blob);
				let a = document.createElement('a');
				a.href = url;
				a.download = this.props.file.name;
				a.click();
			})
			.catch((error) => {
					console.log(error)
			}))
	}

  render() {
    if (this.props.hasIssues) {
      return <div className="has-issues"><h1>Unable to protect file due to structual issues</h1></div>
    }
    return(
      <div className="download-file-button">
        <button className="button button-filled button-icon left" onClick={this.getProtectedFile}>Download Protected File</button>
      </div>
      )
    }
}

export default DownloadFile;
