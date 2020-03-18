import React from 'react';

class DownloadAnalysisReport extends React.Component {

	getAnalysisReport = () => {
		var binaryData = [];
		binaryData.push(this.props.report);
		let url = window.URL.createObjectURL(new Blob(binaryData, {type: "text/xml"}));
		let a = document.createElement('a');
		a.href = url;
		a.download = this.props.filename + ".xml";
		a.click();
	}

  render() {
    return(
        <button className="button button-filled button-icon right" onClick={this.getAnalysisReport}>Download Analysis Report</button>
      )
    }
}

export default DownloadAnalysisReport;