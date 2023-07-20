import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body">
                        {/* Card stats */}
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                    <Card.Body> {/* Use Card.Body */}
                                        <Row>
                                            <Col>
                                                <Card.Title className="text-uppercase text-muted mb-0"> {/* Use Card.Title */}
                                                    Traffic
                                                </Card.Title>
                                                <span className="h2 font-weight-bold mb-0">
                                                    350,897
                                                </span>
                                            </Col>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                    <i className="fas fa-chart-bar" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-success mr-2">
                                                <i className="fa fa-arrow-up" /> 3.48%
                                            </span>{" "}
                                            <span className="text-nowrap">Since last month</span>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Header;
