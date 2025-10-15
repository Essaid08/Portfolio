import { useState, useEffect } from 'react';
import LetterAnimation from '../../components/letter-animation/LetterAnimation';
import styles from './skill.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import ScrollAnimation from 'react-animate-on-scroll';

export const Skill = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <section>
            <ScrollAnimation
                animateOnce
                duration={6}
                animateIn='animate__fadeIn'
            >
                <div className={styles.container} id='skill'>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            <LetterAnimation
                                strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                                letterClass={letterClass}
                                index={1}
                            />
                        </h1>

                        <p className={styles.description}>
                            As a <strong>Full Stack Developer</strong>, I specialize in designing and building
                            scalable, high-performance applications using
                            <span style={{ color: "#5ED4F4" }}> React</span>, <span style={{ color: "#fff" }}> Next.js</span>,
                            and <span style={{ color: "#358Ef1" }}> TypeScript</span> on the frontend — combined with
                            <span style={{ color: "#E34G36" }}> Nest.js</span>, <span style={{ color: "#00ADD8" }}> Golang</span>,
                            and <span style={{ color: "#F0DB4F" }}> Node.js</span> on the backend.
                        </p>

                        <p className={styles.description}>
                            I’m skilled in architecting <strong>RESTful APIs</strong>, integrating both
                            <strong> SQL</strong> and <strong>NoSQL databases</strong> such as PostgreSQL, MongoDB, Redis, and Elasticsearch,
                            and engineering maintainable backend systems. My focus is on delivering
                            secure, efficient, and production-ready solutions.
                        </p>

                        <p className={styles.description}>
                            I’m also proficient with <strong>Docker</strong>, <strong>Git</strong>, and <strong>CI/CD pipelines</strong>,
                            deploying applications in <strong>Linux</strong> environments using Nginx and Docker Compose.
                            These DevOps practices help ensure consistency, scalability, and reliability across all projects.
                        </p>

                        <p className={styles.description}>
                            You can explore more about my professional background on{' '}
                            <a href="https://www.linkedin.com/in/essaid-bouhenni-6206ab25b" style={{ color: '#0077B5' }} target='_blank' rel='noreferrer'>
                                LinkedIn
                            </a>, review my{' '}
                            <a href="" style={{ color: '#c5974c' }}>
                                CV
                            </a>, or check out my project portfolio on{' '}
                            <a href="https://github.com/Essaid08" target='_blank' rel='noreferrer' style={{ color: '#9ca3af' }}>
                                GitHub
                            </a>.
                        </p>
                    </div>

                    <div className={styles.containerSkills}>
                        {skills.map((skill, id) => (
                            <div
                                key={id}
                                className={styles.skillItem}
                                style={{
                                    boxShadow: `0 10px 15px -3px rgba(${skill.style['shadow-color']}, 0.1),
                                                0 4px 6px -2px rgba(${skill.style['shadow-color']}, 0.5)`
                                }}
                            >
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default Skill;
