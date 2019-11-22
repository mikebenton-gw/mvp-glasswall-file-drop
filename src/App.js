import React from 'react';
import logo from './logo.svg';
import './App.css';
import DragAndDrop from './DragAndDrop'
import Items from './Items'

class App extends React.Component {
  state = {
    sanitisations: [],
    issues: [],
    remediations: []
  }

  handleDrop = (file) => {
    var data = new FormData();
    data.append('file', file[0]);

    fetch("http://glasswall-file-drop-engine.uksouth.azurecontainer.io/api/sas/FileAnalysis", {
    method: 'POST',
    body: data})
    .then((res) => res.json())
    .then((result) => {
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(result.analysisReport);    // Assume xmlText contains the example XML
        var sanitisations = xml.getElementsByTagName('gw:SanitisationItem');
        var remediations = xml.getElementsByTagName('gw:RemedyItem');
        var issues = xml.getElementsByTagName('gw:IssueItem');

        this.setState({
          isLoaded: true,
          sanitisations: sanitisations,
          remediations: remediations,
          issues: issues
        });

      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Drag and drop a file to have it processed by the Glasswall d-FIRST Engine</p>

          <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 500}} />
          </DragAndDrop>

          <br />

          <div className="remediations">
            <table>
              <tr>
                <th>Objects & Structures that have been remediated (repaired)</th>
              </tr>
              <tr>
                <Items items = {this.state.remediations} />
              </tr>
            </table>
          </div>

          <br />

          <table>
            <tr>
              <th>Active content that has been sanitised (removed)</th>
            </tr>
            <tr>
              <Items items = {this.state.sanitisations} />
            </tr>
          </table>

          <br />

          <table>
            <tr>
              <th>Structural issues which can't be remediated</th>
            </tr>
            <tr>
              <Items items = {this.state.issues} />
            </tr>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
