import React from 'react';
import { Col, Row } from 'react-bootstrap';
import footerLogo from '../../assets/1-header/logo.png';
import { styles } from '../../styles/styles';

const FooterResponsive = (props) => {
  return (
    <>
      <Row
        className="align-items-center text-white m-0"
        style={props.footerRow}
      >
        <Col
          xs={12}
          md={4}
          className="d-flex align-items-center justify-content-end"
          style={styles.footerBackground1}
        >
          <img src={footerLogo} alt="" />
          <h3 className="ml-4 pr-5">Easy Work</h3>
        </Col>
        <Col xs={6} md={3} className="align-items-center pt-2 pl-5">
          <h6>Address</h6>
          <p>
            52-1,Jalan Awan Hijau, Taman <br />
            Overseas Union, 58200 Kuala <br />
            Lumpur, Wilayah Persekutuan <br />
            Kuala, Lumpur
          </p>
        </Col>
        <Col xs={6} md={3} className="align-items-center pt-3">
          <h6>Contact</h6>
          <p>03-7451 5283</p>
          <h6>Fax</h6>
          <p>03-7451 5283</p>
        </Col>
        <Col
          xs={12}
          md={2}
          className="justify-content-end"
          style={styles.footerBackground2}
        ></Col>
      </Row>
    </>
  );
};

export default FooterResponsive;
