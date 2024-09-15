import './about.scss'
import LetterAnimation from '../letter-animation/LetterAnimation';
import { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";

export const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <section className='container' id='about'>
            <div className='content'>
                <h1 className='title'>
                    <LetterAnimation strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} letterClass={letterClass} index={1} />
                </h1>
                <p className='description'>
                    University of Technology Master's graduate with a passion for building solutions,
                    I'm a driven front-end developer eager to leverage my strong foundation in programming and tech.
                </p>
                <p className='description'>
                    Though new to professional experience, I've honed my skills through freelance projects,
                    fostering a collaborative nature and a dedication to client satisfaction.
                </p>
                <p className='description'>
                Currently exploring back-end development, 
                I'm excited to join an established IT company and contribute my creative thinking, technical expertise,
                </p>
            </div>
            <div className='cube-container'>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FaReact color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FaHtml5 color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FaCss3 color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FaJsSquare color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FaNodeJs color='#6cc24a' />
                        </div>
                        <div className='face6'>
                            <FaGitAlt color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
