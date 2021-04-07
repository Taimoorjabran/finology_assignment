import React from 'react';
import { Col, Row } from 'react-bootstrap';
import content2 from '../assets/3-content/content-002.png';

const EasyAccess = () => {
  return (
    <>
      <Row className="align-items-center justify-content-center m-0">
        <Col xs={11} md={9} lg={4}>
          <h3 className="text-primary">
            Easy access.
            <br />
            Whenever, wherever
            <br />
            you want
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Col>
        <Col md={12} lg={5}>
          <img src={content2} alt="content-2" width="100%" />
        </Col>
      </Row>
    </>
  );
};

export default EasyAccess;
