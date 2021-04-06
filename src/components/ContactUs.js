import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Map from './Map';

const ContactUs = () => {
  return (
    <>
      <h3 className="text-primary text-center my-5">Contact Us</h3>
      <Row className="align-items-center justify-content-center m-0">
        <Col xs={12} md={5} className="my-5 pr-0">
          <Card>
            <Form className="m-5 ">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="controlSelect1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select">
                  <option>Please select your subject</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
                  <option>Subject 4</option>
                  <option>Subject 5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="controlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here"
                />
              </Form.Group>

              <Button variant="primary" className="float-right" type="submit">
                Send
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={12} md={5} className="pl-0">
          <Map />
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;
