import React from "react";
import Items from "./Items";

function RenderAnalysis(props) {
  return (
    <div className="analysis-results">
      <div className="sanitisationTable table-container">
        <h1 className="table-header">
          Active content that has been sanitised (removed)
        </h1>
        <table>
          <tbody>
            <Items items={props.sanitisations} />
          </tbody>
        </table>
      </div>
      <br />
      <div className="remediationsTable table-container">
        <h1 className="table-header">
          Objects & Structures that have been repaired
        </h1>
        <table>
          <tbody>
            <Items items={props.remediations} />
          </tbody>
        </table>
      </div>
      <br />
      <div className="issuesTable table-container">
        <h1 className="table-header">
          Objects & Structures that are unable to be repaired
        </h1>
        <table>
          <tbody>
            <Items items={props.issues} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RenderAnalysis;
