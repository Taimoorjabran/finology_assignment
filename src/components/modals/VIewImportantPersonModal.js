import React from 'react';
import { Card, Col, Modal, Row } from 'react-bootstrap';

import cancelIcon from '../../assets/7-icons/cancel.svg';

const VIewImportantPersonModal = (props) => {
  const importantPersonData = props.data[props.indexcurrent];

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {importantPersonData && (
        <Card>
          <Row>
            <Col xs={4}>
              <img
                src={importantPersonData.pic}
                alt={importantPersonData.name}
                style={{ width: 169 }}
              />
            </Col>
            <Col xs={8}>
              <Row className="mx-0 mt-3">
                <Col xs={10}>
                  <h6>{importantPersonData.name}</h6>
                </Col>
                <Col xs={2}>
                  <div onClick={props.onHide}>
                    <img
                      src={cancelIcon}
                      alt="cancel-icon"
                      style={{ width: 15 }}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="ml-3">
                <p style={{ fontSize: 12 }}>{importantPersonData.position}</p>
              </Row>
              <Row className="mx-3 my-2">
                <p style={{ fontSize: 12 }}>
                  {importantPersonData.description}
                </p>
              </Row>
            </Col>
          </Row>
        </Card>
      )}
    </Modal>
  );
};

export default VIewImportantPersonModal;
