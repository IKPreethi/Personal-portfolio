import React, { useEffect } from 'react';
import {scroller, Element} from 'react-scroll';
import './LandingPage.scss'; 
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import ExperiencePage from '../Experience/Experience'
import Education from '../Education/Education';

const LandingPage = () => {

 
  return (
    <div className="container">
      <div id = "home" className="component">
        <Home />
      </div>
      <div id = "about" className="component">
       <About />
      </div>
      <div id = "experience" className="component">
       <ExperiencePage />
      </div> 
      <div id = "education" className="component">
       <Education />
      </div>
      <div id = "projects" className="component">
       <Projects />
      </div>
      <div id = "contact" className="component">
       <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
