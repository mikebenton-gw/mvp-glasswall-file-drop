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
            <div className="app-header-inner">
              <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="97" /></a></div>
              <nav>
                <button className="info-button" onClick={this.toggleModal} style={{display: "none"}}></button>
                <ul className="app-menu-list">
                    <li><a href="">Product Info</a></li>
                    <li><a href="">Visit Store</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <ProcessFile />
          <div className="app-footer">
            
          </div>
        </div>
        <CSSTransition in={this.state.showModal} timeout={500} classNames="modal" unmountOnExit>
          <Modal onClose={this.toggleModal} containerClick={this.handleContainerClick} key={7}/>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
