import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import headerLogo from '../assets/1-header/logo.png';
import banner from '../assets/2-banner/banner.png';
import searchIcon from '../assets/7-icons/search.svg';
import { styles } from '../styles/styles';

const Header = () => {
  return (
    <>
      <div style={styles.headerContMain}>
        <Navbar bg="#2d2788" expand="lg" className="mx-2 mx-lg-5">
          <Navbar.Brand>
            <img
              src={headerLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="header-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" style={{ flex: 1 }}>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link>Careers</Nav.Link>
            </Nav>
            <img src={searchIcon} alt="" className="d-none d-lg-block" />
          </Navbar.Collapse>
        </Navbar>

        <Row style={styles.headerCont1}>
          <Col
            sm={12}
            md={6}
            className="text-white"
            style={styles.background1Col}
          >
            <div className="text-white ml-sm-0" style={styles.marginLeft110PX}>
              <h1>
                Make developement <br />
                easy with us.
              </h1>
              <p>
                Doing developement can never easy, and it takes time and
                resources.
                <br />
                We at EasyWork has the solution.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div style={styles.marginTop37} className="d-none d-lg-block">
              <img src={banner} alt="banner" className="d-block" width="300" />
            </div>
          </Col>
          <Col
            sm={12}
            md={2}
            className="justify-content-end d-none d-lg-block"
            style={styles.background2Col}
          ></Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
