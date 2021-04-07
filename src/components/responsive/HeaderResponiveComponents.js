import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import headerLogo from '../../assets/1-header/logo.png';
import searchIcon from '../../assets/7-icons/search.svg';
import { styles } from '../../styles/styles';

const HeaderResponive = (props) => {
  return (
    <>
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
        <Navbar.Collapse id="basic-navbar-nav" style={props.marginBottom}>
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Link style={props.color}>Home</Nav.Link>
            <Nav.Link style={props.color}>About Us</Nav.Link>
            <Nav.Link style={props.color}>Services</Nav.Link>
            <Nav.Link style={props.color}>Pricing</Nav.Link>
            <Nav.Link style={props.color}>Careers</Nav.Link>
          </Nav>
          {!props.show && <img src={searchIcon} alt="search-icon" />}
          {props.show && (
            <Row style={styles.headerContresposive}>
              <Col sm={12} md={6} style={styles.background1ColResponsive}></Col>
            </Row>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderResponive;
