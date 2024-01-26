import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./Projects.scss";
import Ecommerce from "../../assets/images/ecommerce1.jpg"
import Dv from "../../assets/images/DV.jpg"
import PortfolioP from "../../assets/images/portfolio1.jpg"
import Tdd from "../../assets/images/testing.jpg"
import FetalHealth from "../../assets/images/Fetal-health.png"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        {'image': Ecommerce,
        'name': 'Stellar ecommerce',
        'description': 'An e-commerce website, that is built using .Net Core, React JS, SQL Server and MongoDB. With JWT token-based authentication and redux for state management.',
        'url': 'https://github.com/IKPreethi/stellar_ecommerce'
        },
        {'image':Dv,
        'name': 'Data Visualization',
        'description': 'How Washington is transitioning to EV - An informative visualization using python that targets and understands the transition of Washington state towards Electric vehicles. I have utilized 7 different visualization techniques including an interactive heatmap.',
        'url': 'https://github.com/IKPreethi/DV-WashingtonTransitionToEV'
        },
        {'image':PortfolioP,
        'name': 'Personal portfolio',
        'description': 'A responsive web application built using React JS. Implemented Emailjs to facilitate email communication through the webapp.',
        'url': 'https://github.com/IKPreethi/Personal-portfolio'
        },
        {'image':Tdd,
        'name': 'Test driven development',
        'description': 'A simple tic-tac-toe game developed with React typescript and jest to demonstrate my understanding of the test driven development using jest and good coding practices.',
        'url': 'https://github.com/IKPreethi/TicTacToe-TDD'
        },
        {'image':FetalHealth,
        'name': 'Fetal Health Classification',
        'description': '',
        'url': 'https://github.com/IKPreethi/Fetal-Health-Classification'
        },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });



    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                   {/* <h4 className="description">{port.description}</h4> */} 
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;