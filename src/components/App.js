import React from "react";
import "../App.css";
import logo from "../logo.svg";
import Modal from "./Modal";
import {CSSTransition} from "react-transition-group";
import ProcessFile from "../components/ProcessFile"

const initialState = {
  showModal: false
};

class App extends React.Component {
  state = initialState;

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleContainerClick = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <div className="app-header">
            <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="90" /></a></div>
            <button className="info-button" onClick={this.toggleModal} style={{display: "none"}}></button>
          </div>
          <ProcessFile />
        </div>
        <CSSTransition in={this.state.showModal} timeout={500} classNames="modal" unmountOnExit>
          <Modal onClose={this.toggleModal} containerClick={this.handleContainerClick} key={7}/>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
