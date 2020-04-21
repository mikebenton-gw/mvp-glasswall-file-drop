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
              <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="100" /></a></div>
              <nav>
                <button className="info-button" onClick={this.toggleModal} style={{display: "none"}}></button>
                <ul className="app-menu-list">
                    <li><a href="">Product Info</a></li>
                    <li><a href="https://glasswall-store.com/">Visit Store</a></li>
                    <li><a href="https://glasswallsolutions.com/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <ProcessFile toggleModal={this.toggleModal}/>
          <div className="app-footer">
            <div className="app-footer-inner">
              <section className="app-footer-left">
                <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="100" /></a></div>
                <span class="copyright">© Copyright 2020 - Glasswall Solutions Ltd. All Rights Reserved</span>
                <div class="social-menu">
                  <a href="https://twitter.com/GlasswallGlobal" target="_blank">
                    <div class="social-icon twitter"></div>
                  </a>
                  <a href="https://www.linkedin.com/company/glasswall-solutions-limited/" target="_blank">
                    <div class="social-icon linkedin"></div>
                  </a>
								</div>
              </section>
              <div className="app-footer-menu">
                <div class="app-footer-menu-title">
                  Technology
                </div>
                <ul>
                  <li><a href="https://glasswallsolutions.com/technology/">d-FIRST</a></li>
                </ul>
              </div>
              <div className="app-footer-menu">
                <div class="app-footer-menu-title">
                  Solutions
                </div>
                <ul>
                  <li><a href="https://glasswallsolutions.com/filetrust-for-email">FileTrust™ for Email</a></li>
                  <li><a href="https://glasswallsolutions.com/filetrust-sdk">FileTrust™ SDK</a></li>
                  <li><a href="https://glasswallsolutions.com/cross-domain-solutions">Cross Domain Solutions</a></li>
                </ul>
              </div>
              <div className="app-footer-menu">
                <div class="app-footer-menu-title">
                  Resources
                </div>
                <ul>
                  <li><a href="https://glasswallsolutions.com/ceo-blog/">CEO BLog</a></li>
                  <li><a href="https://glasswallsolutions.com/customer-success-stories/">Customer Success Stories</a></li>
                  <li><a href="https://glasswallsolutions.com/threat-intelligence/">Threat Intelligence</a></li>
                  <li><a href="https://medium.com/glasswall-engineering">Tech Blog</a></li>
                </ul>
              </div>
              <div className="app-footer-menu">
                <div class="app-footer-menu-title">
                  About Us
                </div>
                <ul>
                  <li><a href="https://glasswallsolutions.com/company/">Company</a></li>
                  <li><a href="https://glasswallsolutions.com/partners/">Partners</a></li>
                  <li><a href="https://glasswallsolutions.com/contact/">Contact</a></li>
                  <li><a href="https://support.glasswallsolutions.com/support/login">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-sub-footer">
          <a href="https://glasswallsolutions.com/privacy-policy/">
								<span class="footer__legend__link">
									Read our Privacy Policy -
								</span>
							</a>
							<span class="footer__address">Continental House, Oakridge, West End, Surrey, GU24 9PJ. Tel: +44 (0) 203 814 3890<br />
		          	CKD 1957 - 2018
              </span>
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
