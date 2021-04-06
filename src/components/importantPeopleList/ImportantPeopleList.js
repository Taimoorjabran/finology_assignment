import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ReactComponent as HappyFace } from '../../assets/7-icons/happy-face.svg';
import ImportantPeopleModal from '../modals/ImportantPeopleModal';
import deleteIcon from '../../assets/7-icons/garbage.svg';
import selectIcon from '../../assets/7-icons/checked.svg';
import pencilIcon from '../../assets/7-icons/pencil.svg';
import { importantPersonData } from '../../data/importantPesonData';
import { styles } from '../../styles/styles';

const ImportantPeopleList = () => {
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false);
  const [showEditPeopleModal, setShowEditPeopleModal] = useState(false);
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
    setSelectedIndex(index);
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
        <Col sm={6} className="d-flex align-items-center">
          <div style={styles.importantPersonListCol1}>
            <HappyFace fill="white" style={styles.importantPersonListCol1Img} />
          </div>
          <h2 className="text-primary ml-3">
            Our important people are listed <br /> here
          </h2>
        </Col>

        <Col sm={6} className="d-flex align-items-center justify-content-end">
          {enableEdit ? (
            <>
              <Button
                variant="light"
                style={styles.importantPersonListCol2CancleBtn}
                onClick={() => setEnableEdit(!enableEdit)}
              >
                Cancle
              </Button>
              <img
                className="ml-3"
                src={deleteIcon}
                alt=""
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
                }}
              />
            </>
          ) : (
            <>
              <Button
                variant="light"
                style={styles.importantPersonListCol2EditBtn}
                onClick={() => setEnableEdit(!enableEdit)}
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
                  onMouseEnter={() => {
                    if (enableEdit === false) {
                      setEditMode(true);
                      setSelectedIndex(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (enableEdit === false) {
                      setEditMode(false);
                      // setSelectedIndex('');
                    }
                  }}
                >
                  {enableEdit && (
                    <div
                      style={styles.importantPersonListCardSelectCircle}
                      onClick={() => handleSelected(index)}
                    >
                      <img
                        src={selectIcon}
                        alt="select-icon"
                        style={{
                          ...styles.importantPersonListCardSelectIcon,
                          display: item.isSelected ? 'block' : 'none',
                        }}
                      />
                    </div>
                  )}

                  {editMode && selectedIndex === index && enableEdit === false && (
                    <div
                      style={styles.importantPersonListCardEditCont}
                      onClick={() => handleCurrentPerson(index)}
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
    </>
  );
};

export default ImportantPeopleList;
