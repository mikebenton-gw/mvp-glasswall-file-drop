import React from 'react';

function FileAttributes(props) {
  return(
    <div className="file-attributes table-container">
      <h1 className="table-header">File Attributes</h1>
      <table>
        <tbody>
          <tr>
            <td>File Name: </td>
            <td>{props.file.name}</td>
          </tr>
          <tr>
            <td>File Size: </td>
            <td>{props.file.size}</td>
          </tr>
          <tr>
            <td>Type: </td>
            <td>{props.fileType}</td>
          </tr>
        </tbody>
      </table>
    </div>)
}

export default FileAttributes;
