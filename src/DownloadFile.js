import React from 'react';

class DownloadFile extends React.Component {
	getProtectedFile = () => {
    var data = new FormData();
    data.append('file', this.props.file);

    fetch("https://glasswall-file-drop-api.azurewebsites.net/api/sas/FileProtect", {
      method: 'POST',
      body: data})
		.then((response) => {
      if (response.ok) {
        return response.blob()
      }
      else {
        throw new Error('Something went wrong');
      }
    })
		.then(blob => {
				let url = window.URL.createObjectURL(blob);
				let a = document.createElement('a');
				a.href = url;
				a.download = this.props.file.name;
				a.click();
		})
		.catch((error) => {
				console.log(error)
		})
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
