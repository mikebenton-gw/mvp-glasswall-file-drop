import React from "react";
import RenderAnalysis from "./RenderAnalysis";
import DownloadFile from "./DownloadFile";
import FileAttributes from "./FileAttributes";

function RenderResults(props) {
  const file = props.file;
  const analysisReport = props.analysisReport;
  const validation = props.validation;

  if (validation !== null && validation !== undefined && validation !== "") {
    return (
      <div className="validationErrors">
        <p>{validation}</p>
      </div>
    );
  }

  if (file !== null && file !== undefined && file !== "" && analysisReport !== null && analysisReport !== undefined && analysisReport !== "") {
    var sanitisations = analysisReport.getElementsByTagName("gw:SanitisationItem");
    var remediations = analysisReport.getElementsByTagName("gw:RemedyItem");
    var issues = analysisReport.getElementsByTagName("gw:IssueItem");
    var fileType = analysisReport.getElementsByTagName("gw:FileType")[0].value;

    if (sanitisations.length || remediations.length || issues.length) {
      return (
        <div className="analysis-results">
          <DownloadFile file={file} hasIssues={issues.length} />
          <br />
          <FileAttributes file={file} fileType={fileType} />
          <br />
          <RenderAnalysis
            remediations={remediations}
            sanitisations={sanitisations}
            issues={issues}
          />
        </div>
      );
    } else {
      return (
        <section className="is-clean">
          <h1>File is clean!</h1>
          <FileAttributes file={file} fileType={fileType} />
        </section>
      );
    }
  }

  return null;
}

export default RenderResults;
