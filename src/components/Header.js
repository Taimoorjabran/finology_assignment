import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../assets/2-banner/banner.png';

import { styles } from '../styles/styles';
import { Breakpoint } from 'react-socks';
import HeaderResponive from './responsive/HeaderResponiveComponents';

const Header = () => {
  return (
    <>
      <div style={styles.headerContMain}>
        <Breakpoint large up>
          <HeaderResponive show={false} marginBottom={{ marginBottom: -8 }} />
        </Breakpoint>
        <Breakpoint medium down>
          <HeaderResponive
            color={styles.mobileNavColor}
            show={true}
            marginBottom={{ marginBottom: -8 }}
          />
        </Breakpoint>

        <Breakpoint large up>
          <Row style={styles.headerCont1}>
            <Col
              sm={12}
              md={6}
              className="text-white"
              style={styles.background1Col}
            >
              <div className="text-white" style={styles.marginLeft110PX}>
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
              <div style={styles.marginTop37}>
                <img
                  src={banner}
                  alt="banner"
                  className="d-block"
                  width="300"
                />
              </div>
            </Col>
            <Col
              sm={12}
              md={2}
              className="justify-content-end"
              style={styles.background2Col}
            ></Col>
          </Row>
        </Breakpoint>
      </div>
    </>
  );
};

export default Header;
