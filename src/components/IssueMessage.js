import React from 'react';

class IssueMessage extends React.Component {


  render() {
    if (this.props.hasIssues) {
      return <div className="has-issues"><h1>Unable to protect file due to structual issues</h1></div>
	}
	else {
	return null
	}
    }
}

export default IssueMessage;
