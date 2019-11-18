import React, { Component } from 'react'
import DragAndDrop from './DragAndDrop'

class CallApi extends Component {
state = {
    file: null,
    isLoaded: false,
    items: null
  }
 handleDrop = (file) => {
   var data = new FormData();
   data.append('file', file[0]);

   var options = {
     method: 'POST',
     body: data
   };

   fetch("http://localhost:8080/api/sas/FileAnalysis", options)
   .then((res) => res.json())
   .then((result) => {
       this.setState({
         isLoaded: true,
         items: result.analysisReport
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
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
            <div><p>{this.state.items}</p></div>
        </div>
      </DragAndDrop>
    )
  }
}
export default CallApi
