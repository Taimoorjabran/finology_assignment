import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import airbnb from '../assets/5-partners/airbnb.png';
import apple from '../assets/5-partners/apple.PNG';
import facebook from '../assets/5-partners/facebook.PNG';
import google from '../assets/5-partners/google.PNG';
import microsoft from '../assets/5-partners/microsoft.PNG';
import nvidia from '../assets/5-partners/nvidia.PNG';
import samsung from '../assets/5-partners/samsung.PNG';
import tesla from '../assets/5-partners/tesla.PNG';

const WorkedWith = () => {
  return (
    <Container>
      <h3 className="text-primary text-center my-5">We've worked with</h3>
      <Row>
        <Col>
          <img src={airbnb} alt="airbnb" />
        </Col>
        <Col>
          <img src={apple} alt="apple" />
        </Col>
        <Col>
          <img src={airbnb} alt="airbnb" />
        </Col>
        <Col>
          <img src={facebook} alt="facebook" />
        </Col>
        <Col>
          <img src={google} alt="google" />
        </Col>
        <Col>
          <img src={microsoft} alt="microsoft" />
        </Col>
        <Col>
          <img src={nvidia} alt="nvidia" />
        </Col>
        <Col>
          <img src={samsung} alt="samsung" />
        </Col>
        <Col>
          <img src={tesla} alt="tesla" />
        </Col>
      </Row>
    </Container>
  );
};

export default WorkedWith;
