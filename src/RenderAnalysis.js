import React from 'react';
import Items from './Items'

class RenderAnalysis extends React.Component {
	render() {
    return(
      <div className="analysisResults">
        <div className="remediationsTable">
          <table>
            <tr>
              <th>Objects & Structures that have been remediated (repaired)</th>
            </tr>
            <tr>
              <Items items = {this.props.remediations} />
            </tr>
          </table>
        </div>
        <br />
        <div className="sanitisationTable">
          <table>
            <tr>
              <th>Active content that has been sanitised (removed)</th>
            </tr>
            <tr>
              <Items items = {this.props.sanitisations} />
            </tr>
          </table>
        </div>
        <br />
        <div className="issuesTable">
          <table>
            <tr>
              <th>Structural issues which can't be remediated</th>
            </tr>
            <tr>
              <Items items = {this.props.issues} />
            </tr>
          </table>
        </div>
      </div>)
	}
}

export default RenderAnalysis;
