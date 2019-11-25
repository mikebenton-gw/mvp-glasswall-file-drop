import React from 'react';

class DownloadFile extends React.Component {

	constructor(props) {
		super(props);
	}

	downloadEmployeeData = () => {
    var data = new FormData();
    data.append('file', this.props.file);

    fetch("https://glasswall-file-drop-api.azurewebsites.net/api/sas/FileProtect", {
      method: 'POST',
      body: data})
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = this.props.file.name;
					a.click();
				});
		});
	}

	render() {
		return (
			<div id="container">
				<button onClick={this.downloadEmployeeData}>Download Protected File</button>
			</div>
		)
	}

}

export default DownloadFile;
