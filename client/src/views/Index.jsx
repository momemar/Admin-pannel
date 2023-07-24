// import { useState } from "react";
// import { Button, Card, Nav, Navbar, Row, Col, Container, Tab } from "react-bootstrap";
// import { Line, Bar } from "react-chartjs-2";
// import classnames from "classnames";
// import Chart from "chart.js";

// // Import chart options and data from "variables/charts.js"
// import {
//     chartOptions,
//     parseOptions,
//     chartExample1,
//     chartExample2,
// } from "variables/charts.js";

// import Header from "components/Headers/Header.js";

// const Index = (props) => {
//     const [activeNav, setActiveNav] = useState(1);
//     const [chartExample1Data, setChartExample1Data] = useState("data1");

//     if (window.Chart) {
//         parseOptions(Chart, chartOptions());
//     }

//     const toggleNavs = (e, index) => {
//         e.preventDefault();
//         setActiveNav(index);
//         setChartExample1Data("data" + index);
//     };

//     return (
//         <>
//             <Header />
//             {/* Page content */}
//             <Container className="mt--7" fluid>
//                 <Row>
//                     <Col className="mb-5 mb-xl-0" xl="8">
//                         <Card className="bg-gradient-default shadow">
//                             <Card.Header className="bg-transparent">
//                                 <Row className="align-items-center">
//                                     <Col>
//                                         <h6 className="text-uppercase text-light ls-1 mb-1">
//                                             Overview
//                                         </h6>
//                                         <h2 className="text-white mb-0">Sales value</h2>
//                                     </Col>
//                                     <Col>
//                                         <Nav justify variant="pills">
//                                             <Nav.Item>
//                                                 <Nav.Link
//                                                     className={classnames("py-2 px-3", {
//                                                         active: activeNav === 1,
//                                                     })}
//                                                     href="#pablo"
//                                                     onClick={(e) => toggleNavs(e, 1)}
//                                                 >
//                                                     <span className="d-none d-md-block">Month</span>
//                                                     <span className="d-md-none">M</span>
//                                                 </Nav.Link>
//                                             </Nav.Item>
//                                             <Nav.Item>
//                                                 <Nav.Link
//                                                     className={classnames("py-2 px-3", {
//                                                         active: activeNav === 2,
//                                                     })}
//                                                     href="#pablo"
//                                                     onClick={(e) => toggleNavs(e, 2)}
//                                                 >
//                                                     <span className="d-none d-md-block">Week</span>
//                                                     <span className="d-md-none">W</span>
//                                                 </Nav.Link>
//                                             </Nav.Item>
//                                         </Nav>
//                                     </Col>
//                                 </Row>
//                             </Card.Header>
//                             <Card.Body>
//                                 {/* Chart */}
//                                 <div className="chart">
//                                     <Line
//                                         data={chartExample1[chartExample1Data]}
//                                         options={chartExample1.options}
//                                         getDatasetAtEvent={(e) => console.log(e)}
//                                     />
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col xl="4">
//                         <Card className="shadow">
//                             <Card.Header className="bg-transparent">
//                                 <Row className="align-items-center">
//                                     <Col>
//                                         <h6 className="text-uppercase text-muted ls-1 mb-1">
//                                             Performance
//                                         </h6>
//                                         <h2 className="mb-0">Total orders</h2>
//                                     </Col>
//                                 </Row>
//                             </Card.Header>
//                             <Card.Body>
//                                 {/* Chart */}
//                                 <div className="chart">
//                                     <Bar
//                                         data={chartExample2.data}
//                                         options={chartExample2.options}
//                                     />
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row className="mt-5">
//                     <Col className="mb-5 mb-xl-0" xl="8">
//                         <Card className="shadow">
//                             <Card.Header className="border-0">
//                                 <Row className="align-items-center">
//                                     <Col>
//                                         <h3 className="mb-0">Page visits</h3>
//                                     </Col>
//                                     <Col className="text-right">
//                                         <Button
//                                             color="primary"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm"
//                                         >
//                                             See all
//                                         </Button>
//                                     </Col>
//                                 </Row>
//                             </Card.Header>
//                             <Card.Body>
//                                 {/* Table */}
//                                 <Tab.Container defaultActiveKey="first">
//                                     <Nav variant="pills" className="nav-fill">
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="first">Page name</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="second">Visitors</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="third">Unique users</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="fourth">Bounce rate</Nav.Link>
//                                         </Nav.Item>
//                                     </Nav>
//                                     <Tab.Content>
//                                         <Tab.Pane eventKey="first">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Page name</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col">Unique users</th>
//                                                         <th scope="col">Bounce rate</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="second">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Page name</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col">Unique users</th>
//                                                         <th scope="col">Bounce rate</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="third">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Page name</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col">Unique users</th>
//                                                         <th scope="col">Bounce rate</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="fourth">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Page name</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col">Unique users</th>
//                                                         <th scope="col">Bounce rate</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                     </Tab.Content>
//                                 </Tab.Container>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col xl="4">
//                         <Card className="shadow">
//                             <Card.Header className="border-0">
//                                 <Row className="align-items-center">
//                                     <Col>
//                                         <h3 className="mb-0">Social traffic</h3>
//                                     </Col>
//                                     <Col className="text-right">
//                                         <Button
//                                             color="primary"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm"
//                                         >
//                                             See all
//                                         </Button>
//                                     </Col>
//                                 </Row>
//                             </Card.Header>
//                             <Card.Body>
//                                 {/* Table */}
//                                 <Tab.Container defaultActiveKey="facebook">
//                                     <Nav variant="pills" className="nav-fill">
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="facebook">Facebook</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="google">Google</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="instagram">Instagram</Nav.Link>
//                                         </Nav.Item>
//                                         <Nav.Item>
//                                             <Nav.Link eventKey="twitter">Twitter</Nav.Link>
//                                         </Nav.Item>
//                                     </Nav>
//                                     <Tab.Content>
//                                         <Tab.Pane eventKey="facebook">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Referral</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col" />
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="google">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Referral</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col" />
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="instagram">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Referral</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col" />
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                         <Tab.Pane eventKey="twitter">
//                                             <Table className="align-items-center table-flush" responsive>
//                                                 <thead className="thead-light">
//                                                     <tr>
//                                                         <th scope="col">Referral</th>
//                                                         <th scope="col">Visitors</th>
//                                                         <th scope="col" />
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {/* Table data goes here */}
//                                                 </tbody>
//                                             </Table>
//                                         </Tab.Pane>
//                                     </Tab.Content>
//                                 </Tab.Container>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default Index;