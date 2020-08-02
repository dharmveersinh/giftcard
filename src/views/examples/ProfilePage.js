/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import Copyable from 'click-to-copy';
import CryptoJS from 'crypto-js';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col
} from "reactstrap";
import QRCode from 'qrcode.react';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import $ from "jquery";
import Footer from "components/Footer/Footer.js";

class ProfilePage extends React.Component {
  state = {
    demoModal: false,
    squares1to6: "",
    squares7and8: "",
    account:null,
    private:null
  };
  // dagger = new Dagger("wss://kovan.dagger.matic.network");
  // async dagger.on("latest:block", function(result) {
  //   console.log("New block created: ", result);
  // });
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  formSubmit1 = () => {
    try{
      let plaintext = CryptoJS.AES.decrypt(this.state.code, this.state.otp.toString());
      console.log(plaintext.toString(CryptoJS.enc.Utf8));
      this.setState({plaintex: plaintext.toString(CryptoJS.enc.Utf8)})
      this.toggleModal("demoModal");
    }
    catch(error){
      alert('Please enter correct Gift-Code and OTP');
    }
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <h3 style={{marginTop:5}}><center>Claim Your Gift</center></h3>
                      <CardBody>
                        <Form className="form" onSubmit={(event) => {this.formSubmit1();event.preventDefault()}}>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-credit-card" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your Gift Card Number...."
                              style={{height:100 }}
                              type="text"
                              onChange={e=>
                                this.setState({ code: e.target.value })
                              }
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="OTP"
                              type="text"
                              onChange={e=>
                                this.setState({ otp: e.target.value })
                              }
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                          <CardFooter>
                            <Button className="btn-round" color="primary" size="lg">
                              Get Started
                            </Button>
                          </CardFooter>
                        </Form>
                      </CardBody>

                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
          {/* Sart Demo Modal */}
            <Modal
              isOpen={this.state.demoModal}
              toggle={() => this.toggleModal("demoModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Scan and Claim</h4>
              </div>
              <div className="modal-body">
                <p>
                  <center><QRCode value={String(this.state.plaintex)} size={200} style={{marginTop:15,border: '15px solid white',borderRadius:15}}/></center>
                  <p>Phrase</p>
                  <Copyable>
                    <p title={String(this.state.plaintex)} className='u-ellipsise' style={{color:'black',margin:'auto',textAlign:'center',background:'#98FB98',border:'1px solid #000000',borderRadius:5}}>
                      {String(this.state.plaintex)}<h6 style={{color:'black',textAlign:'center'}}>{'Click to Copy'}</h6>
                    </p>
                  </Copyable>
                  <div>
                    <h4 style={{color:'black'}}>Steps to claim your Gift Card</h4>
                    <ol>
                      <li style={{color:'black'}}>Download Trust Crypto Wallet</li>
                      <li style={{color:'black'}}>Open the App and choose "I already have a wallet"</li>
                      <li style={{color:'black'}}>Select Ethereum from the list</li>
                      <li style={{color:'black'}}>Scan and Claim/Copy and Claim
                        <ul>
                          <li style={{color:'black'}}>Scan and Claim</li>
                          <li>
                            <ol><li style={{color:'black'}}>Click on button present in Top-Right Corner</li></ol>
                          </li>
                          </ul>
                          <ul>
                            <li style={{color:'black'}}>Copy and Claim</li>
                            <li>
                              <ol><li style={{color:'black'}}>Copy the Phrase and paste in the textbox present in app</li></ol>
                            </li>
                          </ul>
                      </li>
                      </ol>
                  </div>
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal */}
        </div>
      </>
    );
  }
}

export default ProfilePage;
