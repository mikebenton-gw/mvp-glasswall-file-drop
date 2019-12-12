import React from 'react';

class Modal extends React.Component { 

  render() {

    if (this.props.modalState === true) {
    return(
        <div className="modal-overlay file-details-modal">
          <section className="modal-container">
              <header className="modal-header">
                  <div>About</div>
              </header>
              <div classNAme="modal-contents">

              </div>
              <footer className="modal-footer tabset-modal-file-details-footer">
                  <button tabindex="-1" className="button button-filled button-icon icon-export">Export</button>*@
              </footer>
              <button tabindex="-1" className="modal-close-button close-modal"></button>
          </section>
        </div>
    )
  }
    else {
      return null;
    }
  }
}

export default Modal;
