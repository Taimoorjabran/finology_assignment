import React, { forwardRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import jeromeBoudot from '../../assets/4-people/jerome-boudot.jpg';
import jeromeMahuet from '../../assets/4-people/jerome-mahuet.jpg';
import manuelaFaveri from '../../assets/4-people/manuela-faveri.jpg';
import nicolasLebarreau from '../../assets/4-people/nicolas-lebarreau.jpg';
import romaneRegad from '../../assets/4-people/romane-regad.jpg';
import sylvainSalomon from '../../assets/4-people/sylvain-salomon.jpg';
import vincentJoignie from '../../assets/4-people/vincent-joignie.jpg';
import { styles } from '../../styles/styles';

const peopleSay = [
  {
    img: jeromeBoudot,
    name: 'Jerome Boudot',
    position: 'CEO of iCloud',
    aboutUs: `"System is excellent.It has made system user experience to become one of the easiest!"`,
  },
  {
    img: jeromeMahuet,
    name: 'Jerome Mahuett',
    position: 'CEO of Marks.co',
    aboutUs:
      '"I just wanted to share a quick note and let you know that you guys do a really good job."',
  },
  {
    img: manuelaFaveri,
    name: 'Manuela Faveri',
    position: 'BOD of Skyscanner',
    aboutUs: `"Now it's almost like having a designer right.I just choose the page, make the change and update it."`,
  },
  {
    img: nicolasLebarreau,
    name: 'Nicolas Lebarreau',
    position: 'CEO of Marks.co',
    aboutUs:
      'I just wanted to share a quick note and let you know that you guys do a really good job.',
  },
  {
    img: romaneRegad,
    name: 'Romane Regad',
    position: 'CEO of Marks.co',
    aboutUs:
      'I just wanted to share a quick note and let you know that you guys do a really good job.',
  },
  {
    img: sylvainSalomon,
    name: 'Sylvain Salomon',
    position: 'CEO of Marks.co',
    aboutUs:
      'I just wanted to share a quick note and let you know that you guys do a really good job.',
  },
  {
    img: vincentJoignie,
    name: 'Vincent Joignie',
    position: 'CEO of Marks.co',
    aboutUs:
      'I just wanted to share a quick note and let you know that you guys do a really good job.',
  },
];

const AboutCarousel = forwardRef((props, ref) => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    initialSlide: 5,
    showArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="mb-5 mt-3">
      <Slider ref={ref} {...settings}>
        {peopleSay &&
          peopleSay.map((item, index) => {
            return (
              <div key={index}>
                <Card className="mx-3 p-2" style={styles.carouselCard}>
                  <Row>
                    <Col xs={2}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={styles.carouselCardImg}
                      />
                    </Col>
                    <Col xs={5}>
                      <h6>{item.name}</h6>
                      <p>{item.position}</p>
                    </Col>
                  </Row>
                  <Card.Text className="mx-2">{item.aboutUs}</Card.Text>
                </Card>
              </div>
            );
          })}
      </Slider>
    </Container>
  );
});

export default AboutCarousel;
