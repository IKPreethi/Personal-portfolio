import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['P', 'r', 'e', 'e', 't', 'h', 'i']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
      setSDEClass('text-animate1-hover')
    }, 4000)
  }, [])

  const title = (
    <div className="container home-page">
    <div className="text-zone">
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <span> </span>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
        <br />
        <AnimatedLetters
          letterClass={SDEClass}
          strArray={jobArray}
          idx={17}
        />
      </h1>
      <h2>React Js / .Net / C#/ SQL / Azure / AWS / Python / MongoDB</h2>
    </div>
  </div>
  );

  return (
    <div>
     {title}
     <Logo />
    </div>
  )
}

export default Home
