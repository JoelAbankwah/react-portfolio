import './index.scss';
import LogoTitle from '../../assets/images/logo-j.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate');
    const nameArray = ["o", "e", "l"];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
      <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Junior FullStack Developer.</h2>
                <Link to='/react-portfolio/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
      </>
    )
}

export default Home;