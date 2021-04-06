import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Content1 from '../assets/3-content/content-001.png';

const UserExperience = () => {
  return (
    <>
      <Row className="align-items-center justify-content-center m-0">
        <Col sm={12} md={5}>
          <img src={Content1} alt="content-1" width="100%" />
        </Col>
        <Col sm={12} md={4}>
          <h3 className="text-primary">
            We can give you our
            <br /> best user experience
            <br /> to your system
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
      </Row>
    </>
  );
};

export default UserExperience;
