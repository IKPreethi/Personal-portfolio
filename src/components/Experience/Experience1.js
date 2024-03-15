import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling
import EY from "../../assets/images/EY.jpg"; // Import your company logo images
import SAP from "../../assets/images/SAP.jpg"; 
import './Experience.scss'

const ExperiencePage = () => {
    return (
        <>
        <div className="container about-page">
        <Container className="container about-page" style={{ margin: '20px'}}>
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
        </Container>
        </div>
        </>
    );
};

export default ExperiencePage;
