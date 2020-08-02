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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import $ from "jquery";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
    $('#send').click(function(){
      window.location.href = "/send";
    });
    $('#claim').click(function(){
      window.location.href = "/claim";
    });
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    Gift Ethers to your loved <br />
                    <span className="text-white">ones HASSLE-FREE!</span>
                  </h1>
                  <p className="text-white mb-3">
                    Send a Crypto gift card without worrying about the account address. Just Fill a from and Transfer ethers directly through the mail.
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Having Doubts?
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/etherum.png")}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row>
                  <Col md="6" xs="12" style={{marginBottom: 10}} id="send">
                    <Row>
                      <Col className="px-6 py-6" lg="12" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="12" xs="12">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-send text-warning" />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                            &nbsp;
                            </Row>
                            <Row>
                              <Col md="12" xs="12">
                                <div className="text-center numbers">
                                  <CardTitle tag="p">Send</CardTitle>
                                  <p />
                                  <p className="card-category">Send a gift card.</p>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                            &nbsp;
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6" xs="12" id="claim">
                  <Row>
                  <Col className="px-12 py-12" lg="12" sm="12">
                    <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="12" xs="12">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-wallet-43 text-success" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                      &nbsp;
                      </Row>
                      <Row>
                        <Col md="12" xs="12">
                          <div className="text-center numbers">
                            <CardTitle tag="p">Claim</CardTitle>
                            <p />
                            <p className="card-category">Claim your gift card.</p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                      &nbsp;
                      </Row>
                    </CardBody>
                    </Card>
                  </Col>
                  </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg ">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the gift{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Virtual Card</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>FREE</ListGroupItem>
                          <ListGroupItem>Delivered Through Mail</ListGroupItem>
                          <ListGroupItem>OTP Secure</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Paper Card</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>₹10</ListGroupItem>
                          <ListGroupItem>2 Days Delivered(India only)</ListGroupItem>
                          <ListGroupItem>OTP Secure</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Coming Soon
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Plastic Card</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>₹100</ListGroupItem>
                          <ListGroupItem>2 Days Delivered(India only)</ListGroupItem>
                          <ListGroupItem>OTP Secure</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info" disable="true">
                        Coming Soon
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
