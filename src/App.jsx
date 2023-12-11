import React from 'react';
import SectionInfo from './components/card-info/SectionInfo';
import Category from './components/categorys/Category';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

const App = () => {

  return (
    <>
     <Navbar />
     <Hero />
     <SectionInfo />
     <Main />
     <Category />
    </>
  )
}

export default App;