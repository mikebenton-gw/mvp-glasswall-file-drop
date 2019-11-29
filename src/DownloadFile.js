import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { engineApi } from './api/engineApi';

class DownloadFile extends React.Component {
	getProtectedFile = () => {
    var data = new FormData();
    data.append('file', this.props.file);

		trackPromise(
      engineApi.protectFile(data)
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
      return <div className="hasIssues"><p>Unable to protect file due to structual issues</p></div>
    }
    return(
      <div className="downloadFileBtn">
        <button onClick={this.getProtectedFile}>Download Protected File</button>
      </div>
      )
    }
}

export default DownloadFile;
