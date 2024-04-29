import { useEffect, useState } from 'react'
import UTD from "../../assets/images/UTDlogo.png"
import SRM from "../../assets/images/SRM.png"
import './Education.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
 

const Education = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return (
        <>
        <div className="container experience">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u','c','a','t','i','o','n']}
              idx={15}
            />
          </h1>
          <h2 style={{color: '#efd81d', fontWeight: 'bold'  }}>University of Texas at Dallas</h2>
            <p style={{ fontWeight: 'bold'}}>MS in InformationTechnology and Management</p>
            <p style={{ fontStyle: 'italic'}}>[Jan 2023 - May 2024]</p>
            <p>Relevant coursework</p>
                            <li>Object Oriented Programming in Python</li>
                            <li>AWS Cloud Solution Architecture</li>
                            <li>Data Management</li>
                            <li>Data Visualization</li>
          <h2 style={{color: '#efd81d', fontWeight: 'bold'  }}>SRM University</h2>
            <p style={{ fontWeight: 'bold'}}>B.Tech in Electronics and Communication Engineering</p>
            <p style={{ fontStyle: 'italic'}}>[Jul 2015 - Apr 2019]</p>    
            <p>Relevant coursework</p>
                            <li>Fundamentals of Data Structures & Algorithms</li>
                            <li>Computer Communication</li>   
                            <li>Software Engineering</li> 
                            <li>Programming Laboratory</li>         
        </div>
        <div className='text-zone1'>
        <img className = 'image-UTD' src={UTD} alt="Company Logo" />       
        <img className = 'image-SRM'src={SRM} alt="Company Logo" />
        </div>
        
        </div>
        </>
    );
};

export default Education;
