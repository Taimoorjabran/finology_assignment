import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import User from '../../assets/7-icons/user.svg';
import PencilIcon from '../../assets/7-icons/pencil.svg';
import deleteIcon from '../../assets/7-icons/garbage.svg';
import { styles } from '../../styles/styles';

const ImportantPeopleModal = (props) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const fileInput = useRef(null);

  useEffect(() => {
    if (
      props.indexcurrent !== null &&
      props.data &&
      props.title === 'Edit People'
    ) {
      const listData = props.data;
      const currentPerson = listData[props.indexcurrent];
      setSelectedPhoto(currentPerson && currentPerson.pic);
      setPreviewPhoto(currentPerson && currentPerson.pic);
      setName(currentPerson && currentPerson.name);
      setPosition(currentPerson && currentPerson.position);
      setDescription(currentPerson && currentPerson.description);
    }
  }, []);

  const handleImageUplaod = (event) => {
    setSelectedPhoto(event.target.files[0]);
    setPreviewPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleDeletePhoto = (data) => {
    setPreviewPhoto(null);
    const formData = {
      pic: previewPhoto,
      name,
      position,
      isSelected: false,
      description,
    };
    props.submitform(formData);
    setSelectedPhoto(null);
  };

  const handleFormSubmit = (e) => {
    const formData = {
      pic: previewPhoto,
      name,
      position,
      isSelected: false,
      description,
    };

    props.submitform(formData);
    setPreviewPhoto(null);
    setName('');
    setPosition('');
    setDescription('');
    e.preventDefault();
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.File
              id="formControlFile1"
              label="file input"
              onChange={handleImageUplaod}
              ref={fileInput}
              style={styles.importantPeopleModalImgInputElem}
            />
          </Form.Group>
          <div
            className="d-flex flex-column align-items-center mx-auto my-3"
            onClick={() => fileInput.current.click()}
            style={styles.importantPeopleModalImgCont}
          >
            {selectedPhoto ? (
              <>
                <img
                  src={previewPhoto}
                  alt=""
                  style={styles.ImportantPeopleModalImgPreView}
                />
                {props.edit === 'true' ? (
                  <img
                    src={PencilIcon}
                    alt=""
                    style={styles.ImportantPeopleModalEditImgIcon}
                  />
                ) : null}
              </>
            ) : (
              <>
                <img
                  src={User}
                  alt=""
                  style={styles.ImportantPeopleModalImgUpload}
                />
                <img
                  src={PencilIcon}
                  alt=""
                  style={styles.ImportantPeopleModalEditImgIcon}
                />
              </>
            )}
          </div>
          <div>
            {props.edit === 'true' && selectedPhoto && (
              <div
                className="d-flex align-items-start justify-content-center my-2"
                onClick={() => handleDeletePhoto(props.data)}
                style={styles.ImportantPeopleModalDeleteCont}
              >
                <div style={styles.importantPeopleModalDeleteImgCont}>
                  <img
                    src={deleteIcon}
                    alt="delete-icon"
                    style={styles.ImportantPeopleModalDeleteIcon}
                  />
                </div>
                <h6 className="text-danger ml-2">Delete Picture</h6>
              </div>
            )}
          </div>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && <p className="text-danger">please enter name</p>}
          </Form.Group>
          <Form.Group controlId="formBasicPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="position"
              placeholder="Enter Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="form.description">
            <Form.Label>Enter description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="light" type="button" onClick={props.onHide}>
              Cancle
            </Button>
            <Button
              variant="primary"
              type="button"
              className="ml-3"
              onClick={(e) => {
                if (name === '') {
                  setError(true);
                } else {
                  props.onHide(false);
                  handleFormSubmit(e);
                }
              }}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ImportantPeopleModal;
