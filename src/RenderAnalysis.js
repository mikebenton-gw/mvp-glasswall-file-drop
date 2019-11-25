import React from 'react';
import Items from './Items'

class RenderAnalysis extends React.Component {
	render() {
    return(
      <div className="analysisResults">
        <div className="remediationsTable">
          <table>
            <thead>
              <tr>
                <th>Objects & Structures that have been remediated (repaired)</th>
              </tr>
            </thead>
            <tbody>
              <Items items = {this.props.remediations} />
            </tbody>
          </table>
        </div>
        <br />
        <div className="sanitisationTable">
          <table>
            <thead>
              <tr>
                <th>Active content that has been sanitised (removed)</th>
              </tr>
            </thead>
            <tbody>
              <Items items = {this.props.sanitisations} />
            </tbody>
          </table>
        </div>
        <br />
        <div className="issuesTable">
          <table>
            <thead>
            <tr>
              <th>Structural issues which can't be remediated</th>
            </tr>
            </thead>
            <tbody>
              <Items items = {this.props.issues} />
            </tbody>
          </table>
        </div>
      </div>)
	}
}

export default RenderAnalysis;
