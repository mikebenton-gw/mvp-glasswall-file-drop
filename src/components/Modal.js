import React from "react";

function Modal() {
  return (
    <div
      className="modal-overlay file-details-modal"
      onClick={this.props.onClose}>
      <section className="modal-container" onClick={this.props.containerClick}>
        <header className="modal-header">
          <h1>About</h1>
        </header>
        <div className="modal-contents">
          <p>Putting some text in the modal</p>
        </div>
        <footer className="modal-footer tabset-modal-file-details-footer">
          <button
            tabIndex="-1"
            className="button button-filled"
            onClick={this.props.onClose}>
            OK
          </button>
        </footer>
        <button
          tabIndex="-1"
          className="modal-close-button close-modal"
          onClick={this.props.onClose}></button>
      </section>
    </div>
  );
}

export default Modal;
