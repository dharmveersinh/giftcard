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
import {
  generateMnemonic,
  EthHdWallet
} from 'eth-hd-wallet';
import CryptoJS from 'crypto-js';
import {
  UncontrolledAlert,
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

class RegisterPage extends React.Component {
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
    let mno = generateMnemonic();
    const wallet = EthHdWallet.fromMnemonic(mno);
    this.setState({ account_wallet: mno});
    console.log(wallet);
    this.state.account = String(wallet.generateAddresses(1));
    this.state.private = wallet.getPrivateKey(this.state.account).toString('hex');
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
    // console.log(this.state.recivename);
    // console.log(this.state.sendername);
    // console.log(this.state.toemail);
    // console.log(this.state.message);
    // console.log(this.state.private);
    let otp = Math.floor(100000 + Math.random() * 900000);
    //console.log(otp);
    let ciphertext = CryptoJS.AES.encrypt(this.state.account_wallet, otp.toString()).toString();
    let vardata = {
      email: this.state.toemail,
      fname: this.state.sendername,
      tname: this.state.recivename,
      message: this.state.message,
      seed: ciphertext,
      otp: otp,
    }
    $.ajax({
        url: "https://ethgifts.online:85/index.php",
        type: "post",
        data: vardata,
        contentType:"application/json",
        dataType:'jsonp',
        crossDomain: true,
        headers: {"Access-Control-Allow-Origin":"*"},
        success: function(resultData) { $('#alet').css('display','block');},
        error: function (jqXHR, exception) {
            $('#alet').css('display','block');
        },
    });
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
                      <CardHeader className="text-center">
                        <QRCode value={String(this.state.account)} size={200} style={{marginTop:15,border: '15px solid white',borderRadius:15}}/>
                      </CardHeader>
                      <CardBody>
                        <Form className="form" onSubmit={(event) => {this.formSubmit1();event.preventDefault()}}>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your Name...."
                              required
                              type="text"
                              onChange={e=>
                                this.setState({ sendername: e.target.value })
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
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your Loved one's Name..."
                              type="text"
                              required
                              onChange={e=>
                                this.setState({ recivename: e.target.value })
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
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              required
                              onChange={e=>
                                this.setState({ toemail: e.target.value })
                              }
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-send" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="A Lovely Message Here...."
                              type="text"
                              required
                              onChange={e=>
                                this.setState({ message: e.target.value })
                              }
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                            />
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox"/>
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
                          <UncontrolledAlert className="alert-with-icon" color="success" id='alet' style={{display:'none'}}>
                              <span data-notify="icon" className="tim-icons icon-bell-55" />
                              <span>
                                <b>Well done! -</b>
                                Your Gift has been send!
                              </span>
                            </UncontrolledAlert>
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
                  <h4>Steps to claim your Gift Card</h4>
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

export default RegisterPage;
