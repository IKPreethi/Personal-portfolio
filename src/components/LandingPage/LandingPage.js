import React, { useEffect } from 'react';
import {scroller, Element} from 'react-scroll';
import './LandingPage.scss'; 
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const LandingPage = () => {

 
  return (
    <div className="container">
      <Element name =  "personal-portfolio" className="section">
      <div className="component">
        <Home />
      </div>
      </Element>
      <div className="component">
       <About />
      </div>
      <div className="component">
       <Projects />
      </div>
      <div className="component">
       <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
