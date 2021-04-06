import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserExperience from '../components/UserExperience';
import EasyAccess from '../components/EasyAccess';
import ImportantPeopleList from '../components/importantPeopleList/ImportantPeopleList';
import PeopleAboutUs from '../components/PeopleAboutUs';
import WorkedWith from '../components/WorkedWith';
import ContactUs from '../components/ContactUs';

const LandingPage = () => {
  return (
    <>
      <Header />
      <UserExperience />
      <EasyAccess />
      <PeopleAboutUs />
      <ImportantPeopleList />
      <WorkedWith />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
