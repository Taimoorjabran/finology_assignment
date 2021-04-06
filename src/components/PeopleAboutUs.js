import React from 'react';
import { Col, Row } from 'react-bootstrap';
import heartIcon from '../assets/7-icons/heart.svg';
import AboutCarousel from './carousel/AboutCarousel';
import arrowForward from '../assets/7-icons/arrow-right.svg';
import { styles } from '../styles/styles';

const PeopleAboutUs = () => {
  let slider;

  const next = () => {
    slider.slickNext();
  };
  return (
    <>
      <Row className="align-items-center  justify-content-between m-1">
        <Col sm={6} className="d-flex align-items-center ml-4">
          <div style={styles.peopleAboutUsCol1Div1}>
            <div style={styles.peopleAboutUsCol1Div1Div1}>
              <img src={heartIcon} alt="heart" style={styles.heartIconImg} />
            </div>
          </div>
          <h3 className="text-primary ml-3">
            What other people say about
            <br /> our services
          </h3>
        </Col>
        <Col sm={3}>
          <div style={styles.col2Div1} onClick={next}>
            <img src={arrowForward} alt="" style={styles.forwardArrowImg} />
          </div>
        </Col>
      </Row>
      <AboutCarousel
        ref={(c) => {
          slider = c;
        }}
      />
    </>
  );
};

export default PeopleAboutUs;
