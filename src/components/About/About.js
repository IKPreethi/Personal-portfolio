import { useEffect, useState } from 'react'
import { VscAzure } from "react-icons/vsc";
import { SiDotnet } from "react-icons/si";
import {
  faAws,
  faGitAlt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Software developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            With a rich background spanning over 4 years, I've contributed my skills as a Software Developer in two prominent organizations – SAP Labs India and Ernst & Young.
           </p>
           <p>
            At SAP Labs, I played a pivotal role in helping businesses of diverse sizes and industries operate profitably through SAP's intelligent technologies. My focus was on developing a cloud-based analytics service, a single solution merging business intelligence and enterprise planning with the power of artificial intelligence, machine learning, and predictive analytics. 
            </p>
            <p>
            Prior to my experience at SAP Labs, I contributed my expertise as a Software Developer at Ernst & Young - GDS. Here, I worked on a patented EY-Life Science Healthcare project, collaborating with esteemed clients like NHS, Pfizer, AstraZeneca, BMS, Roche, among others. The project aimed to create value-based contracting strategies, optimizing costs while improving patient outcomes.
            </p>
            <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one development problem at a time.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiDotnet />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <VscAzure />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
