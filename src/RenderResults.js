import React from 'react';
import RenderAnalysis from './RenderAnalysis'
import DownloadFile from './DownloadFile'

class RenderResults extends React.Component {
	render() {
      const file = this.props.file;
      const analysisReport = this.props.analysisReport;

      if ((file !== null && file !== undefined && file !== "") && (analysisReport !== null && analysisReport !== undefined && analysisReport !== "")) {
        var sanitisations = analysisReport.getElementsByTagName('gw:SanitisationItem');
        var remediations = analysisReport.getElementsByTagName('gw:RemedyItem');
        var issues = analysisReport.getElementsByTagName('gw:IssueItem');

				if (sanitisations.length || remediations.length || issues.length)
				{
					return(
						<div className="analysisResults">
							<DownloadFile file = {file} hasIssues = {issues.length} />
							<br />
							<RenderAnalysis remediations={remediations} sanitisations={sanitisations} issues={issues} />
						</div>)
				}
				else {
					return <div className="isClean"><p>File is clean!</p></div>;
				}
      }

      return null;
	}
}

export default RenderResults;
