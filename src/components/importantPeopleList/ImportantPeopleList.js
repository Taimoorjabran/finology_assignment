import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ReactComponent as HappyFace } from '../../assets/7-icons/happy-face.svg';
import ImportantPeopleModal from '../modals/ImportantPeopleModal';
import deleteIcon from '../../assets/7-icons/garbage.svg';
import selectIcon from '../../assets/7-icons/checked.svg';
import pencilIcon from '../../assets/7-icons/pencil.svg';
import { importantPersonData } from '../../data/importantPesonData';
import { styles } from '../../styles/styles';
import VIewImportantPersonModal from '../modals/VIewImportantPersonModal';

const ImportantPeopleList = () => {
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false);
  const [showEditPeopleModal, setShowEditPeopleModal] = useState(false);
  const [showViewPeopleModal, setShowViewPeopleModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [importantPersonList, setImportantPersonList] = useState([]);

  useEffect(() => {
    const importantPerson = localStorage.getItem('importantPeson')
      ? JSON.parse(localStorage.getItem('importantPeson'))
      : importantPersonData;
    setImportantPersonList(importantPerson);
  }, []);

  const handleCurrentPerson = (index) => {
    setSelectedIndex(index);
    setShowEditPeopleModal(true);
  };

  const handleSelected = (index) => {
    let data = [...importantPersonList];
    data[index].isSelected = !data[index].isSelected;
    setImportantPersonList(data);
  };

  const handleSubmit = (data) => {
    const newData = [...importantPersonList, data];

    localStorage.setItem('importantPeson', JSON.stringify(newData));
    setImportantPersonList(newData);
  };

  const handleEditSubmit = (data) => {
    const dataList = [...importantPersonList];
    dataList[selectedIndex] = data;

    localStorage.setItem('importantPeson', JSON.stringify(dataList));
    setImportantPersonList(dataList);
  };

  return (
    <>
      <Row className="d-flex justify-content-between mx-5">
        <Col xs={12} sm={6} className="d-flex align-items-center">
          <div style={styles.peopleAboutUsCol1Div1}>
            <div style={styles.importantPersonCol1Div1Div1}>
              <HappyFace
                fill="white"
                style={styles.importantPersonListCol1Img}
              />
            </div>
          </div>
          <h3 className="text-primary ml-3">
            Our important people are listed <br /> here
          </h3>
        </Col>

        <Col
          xs={12}
          sm={6}
          className="d-flex align-items-center justify-content-end"
        >
          {enableEdit ? (
            <>
              <button
                style={styles.importantPersonListCol2CancleBtn}
                onClick={() => {
                  setEnableEdit(false);
                  setShowViewPeopleModal(false);
                }}
              >
                Cancle
              </button>
              <div className="ml-3" style={styles.deleteIconCont}>
                <img
                  src={deleteIcon}
                  alt="delete-icon"
                  style={styles.deleteIcon}
                  onClick={() => {
                    const newImportant = importantPersonList.filter((item) => {
                      return item.isSelected === false;
                    });
                    localStorage.setItem(
                      'importantPeson',
                      JSON.stringify(newImportant)
                    );
                    setImportantPersonList(newImportant);
                    setSelectedIndex(null);
                    setEnableEdit(false);
                    setShowViewPeopleModal(false);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <Button
                variant="light"
                style={styles.importantPersonListCol2EditBtn}
                onClick={() => setEnableEdit(true)}
              >
                Eidt
              </Button>
              <Button
                variant="light"
                className="ml-3"
                style={styles.importantPersonListCol2AddBtn}
                onClick={() => setShowAddPeopleModal(!showAddPeopleModal)}
              >
                Add
              </Button>
            </>
          )}
        </Col>
      </Row>
      <div className="d-flex justify-content-center flex-wrap">
        {importantPersonList &&
          importantPersonList.map((item, index) => {
            return (
              <div
                className="mx-4"
                key={index}
                style={styles.importantPersonListCardCont}
              >
                <Card
                  className="text-center my-3 "
                  style={styles.importantPersonListCard}
                  onClick={() => {
                    setShowViewPeopleModal(true);
                  }}
                  onMouseEnter={() => {
                    if (enableEdit === false) {
                      setEditMode(true);
                      setSelectedIndex(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (enableEdit === false) {
                      setEditMode(false);
                    }
                  }}
                >
                  {enableEdit && (
                    <div
                      style={styles.importantPersonListCardSelectCircle}
                      onClick={() => handleSelected(index)}
                    >
                      {item && item.isSelected && (
                        <div style={styles.onSelectBackgroundColor}>
                          <img
                            src={selectIcon}
                            alt="select-icon"
                            style={styles.importantPersonListCardSelectIcon}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {editMode && selectedIndex === index && enableEdit === false && (
                    <div
                      style={styles.importantPersonListCardEditCont}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCurrentPerson(index);
                      }}
                    >
                      <img
                        src={pencilIcon}
                        alt="pencil-Icon"
                        style={styles.importantPersonListCardEditIcon}
                      />
                    </div>
                  )}
                  <Card.Img
                    variant="top"
                    src={item.pic}
                    style={styles.importantPersonListCardImg}
                  />
                  <div style={styles.importantPersonListCardTextCont}>
                    <Card.Text className="h6 mt-3">{item.name}</Card.Text>
                    <Card.Text className="mb-3">{item.position}</Card.Text>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>

      <ImportantPeopleModal
        show={showAddPeopleModal}
        title={'Add People'}
        edit={'false'}
        data={importantPersonList}
        onHide={() => setShowAddPeopleModal(false)}
        submitform={handleSubmit}
        indexcurrent={selectedIndex}
      />
      {showEditPeopleModal && (
        <ImportantPeopleModal
          show={showEditPeopleModal}
          title={'Edit People'}
          edit={'true'}
          data={importantPersonList}
          submitform={handleEditSubmit}
          indexcurrent={selectedIndex}
          onHide={() => setShowEditPeopleModal(false)}
        />
      )}
      {showViewPeopleModal &&
        showEditPeopleModal === false &&
        showAddPeopleModal === false &&
        enableEdit === false && (
          <VIewImportantPersonModal
            show={showViewPeopleModal}
            data={importantPersonList}
            indexcurrent={selectedIndex}
            onHide={() => {
              setShowViewPeopleModal(false);
            }}
          />
        )}
    </>
  );
};

export default ImportantPeopleList;
