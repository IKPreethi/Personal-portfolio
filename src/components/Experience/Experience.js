import { useEffect, useState } from 'react'
import { VscAzure } from "react-icons/vsc";
import { SiDotnet, SiSap } from "react-icons/si";
import SAP from "../../assets/images/sap_logo_icon.png"
import EY from "../../assets/images/ey_logo_icon.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Experience.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
 

const ExperiencePage = () => {
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
              strArray={['E', 'x', 'p','e','r','i','e','n','c','e']}
              idx={15}
            />
          </h1>
          <p style={{color: '#efd81d', fontWeight: 'bold'  }}>Software developer - SAP</p>
                            <p style={{ fontStyle: 'italic'}}>[Feb 2022 - Nov 2022]</p>
                            <p>SAP Analytic Cloud - Light Weight viewer, SAP's flagship product that empowers business analysts and
                            unifies the companys decision-making process by providing an optimized combination of business intelligence, enterprise planning and augmented analytics into one product. </p>
                            <li>Worked on React, SAP UI5, TDD- Jest, Jasmine, Redux, Typescript</li>
                            <li>Developed a complex URL parameter story, that alters the web page rendering through the parameters supplied with varied permissions and restrictions.</li>
                            <li>Authored test cases to improve the code coverage of the application.</li>

                            {/* <ul style={{ marginBottom: '20px', color: 'white' }}>
                             <img src={EY} alt="Freelance Logo" className="image-box" /> 
                            <h3>Software Engineer - Ernst & Young</h3>
                            <p>[Aug 2019 - Feb 2022]</p>
                            <p>Health Outcomes Platform (HOP) is a patented visionary project that comes under the EY Life Sciences team which helps create value-based contracting strategies with the aim to treat more patients, drive better outcomes and optimize cost. </p>
                            <p>Technologies used in the application are - ReactJs, .Net Core, Microservices, SQL Server, NO SQL (Cosmos DB), and Azure.</p>
                            <p>Working with a team of about 250+ members spread across 30 countries worldwide, Preethi earned global experience in different work cultures and environments.</p>
                    </ul> */}
                    <p style={{color: '#efd81d', fontWeight: 'bold'  }}>Software Engineer - Ernst & Young</p>
                            <p style={{ fontStyle: 'italic'}}>[Aug 2019 - Feb 2022]</p>
                            <p>Health Outcomes Platform (HOP) is a patented visionary project that comes under the EY Life Sciences team which helps create value-based contracting strategies with the aim to treat more patients, drive better outcomes and optimize cost. </p>
                            <li>Worked on - ReactJs, .Net Core, Microservices, SQL Server, NO SQL (Cosmos DB), and Azure.</li>
                            <li>Worked with a team of about 250+ members spread across 30 countries worldwide, Preethi earned global experience in different work cultures and environments.</li>
                            <li>Implemented service filters, two factor authentication and followed secure coding practices to make the application secure.</li>
                            <li>Improved the performance of the application by incorporating Lazy loading, React router, Redux and efficient error handling methodologies.</li>
        </div>
        <div className='text-zone1'>
        <img className = 'image-SAP' src={SAP} alt="Company Logo" />       
        <img className = 'image-EY'src={EY} alt="Company Logo" />
        </div>
        
        {/* <Container className="container about-page" style={{ margin: '10px'}}>
            <Row style={{display: 'flex'}}>
                <Col xs={12}>
                    <h1>Professional Experience</h1>
                    <ul style={{ marginBottom: '20px', color: 'white'}}>
                            <img src={SAP} alt="Company Logo"  className="image-box" />
                            <h3>Software developer - SAP</h3>
                            <p>[Feb 2022 - Nov 2022]</p>
                            <p>SAP Analytic Cloud - Light Weight viewer, SAP's flagship product that empowers business analysts and
                            unifies the companys decision-making process by providing an optimized combination of business intelligence, enterprise planning and augmented analytics into one product. </p>
                            <p>Worked on React, SAP UI5, TDD- Jest, Jasmine, Redux, Typescript</p>
                    </ul>
                </Col>
                </Row>
                 <Row>
                <Col xs={12}>
                    <ul style={{ marginBottom: '20px', color: 'white' }}>
                            <img src={EY} alt="Freelance Logo" className="image-box" />
                            <h3>Software Engineer - Ernst & Young</h3>
                            <p>[Aug 2019 - Feb 2022]</p>
                            <p>Health Outcomes Platform (HOP) is a patented visionary project that comes under the EY Life Sciences team which helps create value-based contracting strategies with the aim to treat more patients, drive better outcomes and optimize cost. </p>
                            <p>Technologies used in the application are - ReactJs, .Net Core, Microservices, SQL Server, NO SQL (Cosmos DB), and Azure.</p>
                            <p>Working with a team of about 250+ members spread across 30 countries worldwide, Preethi earned global experience in different work cultures and environments.</p>
                    </ul>
                </Col>
            </Row>
        </Container> */}
        </div>
        </>
    );
};

export default ExperiencePage;
