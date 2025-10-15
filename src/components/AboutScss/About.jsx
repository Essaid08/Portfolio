import './about.scss'
import LetterAnimation from '../letter-animation/LetterAnimation';
import { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGolang } from 'react-icons/fa6';

export const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <ScrollAnimation
            animateOnce
            duration={5}
            animateIn='animate__fadeIn'
        >
            <section className='container' id='about'>
                <div className='content'>
                    <h1 className='title'>
                        <LetterAnimation
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            letterClass={letterClass}
                            index={1}
                        />
                    </h1>

                    <p className='description'>
                        I’m <strong>Assaid</strong>, a <strong>Full Stack Developer</strong> specializing in building scalable web applications using
                        <strong> Golang</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and <strong>Nest.js</strong>.
                        I’m passionate about designing maintainable architectures, integrating modern databases,
                        and delivering production-ready solutions.
                    </p>

                    <p className='description'>
                        My expertise spans both frontend and backend — from crafting responsive, accessible interfaces
                        with <strong>React</strong> and <strong>Tailwind CSS</strong> to building robust RESTful APIs with
                        <strong> Nest.js</strong> and <strong>Golang</strong>. I’m also experienced with <strong>Docker</strong>,
                        <strong> CI/CD pipelines</strong>, and <strong>Linux</strong> environments, focusing on performance and security.
                    </p>

                    <p className='description'>
                        Over the past years, I’ve developed multiple real-world projects including enterprise dashboards,
                        AI-powered identity verification systems, and multi-store e-commerce platforms.
                        Notable works include the <strong>AI Identity Verification Platform</strong>,
                        <strong> Multi-Store E-commerce System</strong>, and <strong>BrilexDz</strong> — a React-based
                        product showcase for an Algerian hygiene company.
                    </p>

                    <p className='description'>
                        I hold a <strong>Master’s degree in Engineering</strong> and am fluent in <strong>English</strong>,
                        with intermediate <strong>French</strong> and native <strong>Arabic</strong> proficiency.
                        My goal is to continue mastering full-stack and DevOps technologies while contributing
                        to impactful, scalable, and well-engineered solutions.
                    </p>
                </div>

                <div className='cube-container'>
                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FaReact color='#5ED4F4' />
                            </div>
                            <div className='face2'>
                                <FaGolang color='#5ED4F4' />
                            </div>
                            <div className='face3'>
                                <FaDocker color='#28A4D9' />
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
        </ScrollAnimation >
    )
}

export default About;
