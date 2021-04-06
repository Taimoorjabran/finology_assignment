import backgroundImage1 from '../assets/2-banner/banner-rounded-001.svg';
import backgroundImage2 from '../assets/2-banner/banner-rounded-002.svg';
import footerBG1 from '../assets/6-footer/footer-rounded-001.svg';
import footerBG2 from '../assets/6-footer/footer-rounded-002.svg';

export const styles = {
  // header

  headerContMain: { backgroundColor: '#2d2788' },
  headerCont1: { height: 300, margin: 0 },
  background1Col: {
    height: 300,
    backgroundImage: `url(${backgroundImage1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '45% 115%',
  },
  marginLeft110PX: { marginLeft: 110 },
  marginTop37: { marginTop: 37 },
  background2Col: {
    height: 300,
    backgroundImage: `url(${backgroundImage2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '185% 70%',
    marginTop: 35,
  },

  //   people about us

  peopleAboutUsCol1Div1: {
    height: 50,
    width: 60,
    backgroundColor: '#fffefb',
    position: 'relative',
  },
  peopleAboutUsCol1Div1Div1: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    boxShadow: '#f58c8c 1px 3px 6px 0px',
  },
  heartIconImg: { fill: '#ea825a', width: 14, verticalAlign: 'sub' },
  Col2Div1: {
    height: 30,
    width: 30,
    backgroundColor: '#e0d9ff',
    borderRadius: 15,
    textAlign: 'center',
  },
  forwardArrowImg: {
    width: 15,
    verticalAlign: 'text-bottom',
  },

  //   about carouse

  carouselCard: {
    boxShadow: '#dedadbf2 0px 5px 4px 0px',
    borderBottom: 'inset',
  },

  carouselCardImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 5,
  },

  // important person List

  importantPersonListCol1: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#fd00c6',
    textAlign: 'center',
    boxShadow: '#f58ce3 1px 3px 6px 0px',
  },

  importantPersonListCol1Img: { width: 15, margin: 3 },
  importantPersonListCol1CancleBtn: {
    color: 'orange',
    backgroundColor: 'lightpink',
  },
  importantPersonListCol2EditBtn: {
    color: 'orange',
    backgroundColor: 'lightpink',
    paddingLeft: 20,
    paddingRight: 20,
  },
  importantPersonListCol2AddBtn: {
    color: 'blue',
    backgroundColor: 'lightblue',
    paddingLeft: 20,
    paddingRight: 20,
  },
  importantPersonListCardCont: {
    float: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  importantPersonListCard: {
    width: 200,
    boxShadow: '#dedadbf2 0px 5px 4px 0px',
  },
  importantPersonListCardSelectCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    border: '1px solid grey',
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    zIndex: 1,
    marginBottom: -25,
  },
  importantPersonListCardSelectIcon: { width: 10, marginBottom: 15, margin: 1 },
  importantPersonListCardEditCont: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: -30,
    backgroundColor: 'lightskyblue',
    marginTop: 10,
    zIndex: 1,
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  importantPersonListCardEditIcon: {
    width: 9,
    verticalAlign: 'super',
    marginTop: 5,
  },
  importantPersonListCardImg: { width: 200, height: 200 },
  importantPersonListCardTextCont: { height: 85 },

  // important people modal

  importantPeopleModalImgInputElem: { display: 'none' },
  importantPeopleModalImgCont: { width: 100, height: 100, borderRadius: 100 },
  ImportantPeopleModalImgPreView: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  ImportantPeopleModalEditImgIcon: {
    borderRadius: 20,
    backgroundColor: 'skyblue',
    width: 20,
    padding: 5,
    marginTop: -18,
    marginLeft: 50,
    boxShadow: '2px 2px 4px 2px #888888',
  },
  ImportantPeopleModalImgUpload: {
    borderRadius: 50,
    backgroundColor: 'skyblue',
    width: 100,
    padding: 35,
  },

  ImportantPeopleModalDeleteCont: {
    cursor: 'pointer',
    width: 'fit-content',
    margin: 'auto',
  },
  importantPeopleModalDeleteImgCont: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
  },
  ImportantPeopleModalDeleteIcon: {
    width: 10,
    verticalAlign: 'super',
    marginTop: 5,
  },

  // map

  mapCurrentLoactionTextCont: {
    height: 25,
    width: 100,
    backgroundColor: 'lightyellow',
    textAlign: 'center',
  },

  mapCont: { height: '70vh', width: '100%' },

  // footer

  footerRow: { backgroundColor: '#2d2788', height: 160 },

  footerBackground1: {
    backgroundImage: `url(${footerBG1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 170,
    top: -10,
  },

  footerBackground2: {
    height: 170,
    backgroundImage: `url(${footerBG2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '190% 190%',
    top: -10,
  },
};
