import React from 'react';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import Resume from './Components/Resume';

const App = () => {
  return (
    <div className='max-w-7xl max-auto'>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Resume></Resume>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;