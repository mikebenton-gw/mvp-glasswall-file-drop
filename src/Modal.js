import React from 'react';

class Modal extends React.Component { 

  render() {

    return(
        <div className="modal-overlay file-details-modal">
          <section className="modal-container">
              <header className="modal-header">
                  <h1>About</h1>
              </header>
              <div className="modal-contents">

              </div>
              <footer className="modal-footer tabset-modal-file-details-footer">
                  <button tabIndex="-1" className="button button-filled" onClick={this.props.onClose}>OK</button>
              </footer>
              <button tabIndex="-1" className="modal-close-button close-modal"  onClick={this.props.onClose}></button>
          </section>
        </div>
    )
  }

}

export default Modal;
