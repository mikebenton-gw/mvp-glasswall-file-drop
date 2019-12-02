import React from 'react';

class FileAttributes extends React.Component {
	render() {
    return(
      <div className="FileAttributes">
        <table>
          <thead>
            <tr>
              <th>File Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>File Name: </td>
              <td>{this.props.file.name}</td>
            </tr>
            <tr>
              <td>File Size: </td>
              <td>{this.props.file.size}</td>
            </tr>
            <tr>
              <td>Type: </td>
              <td>{this.props.fileType}</td>
            </tr>
          </tbody>
        </table>
      </div>)
    }
}

export default FileAttributes;
