import { useState } from 'react';
import LetterAnimation from '../../components/letter-animation/LetterAnimation'
import { useEffect } from 'react';
import styles from './skill.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils'
import ScrollAnimation from 'react-animate-on-scroll';

export const Skill = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <section>
            <ScrollAnimation
                animateOnce
                duration={1}
                animateIn='animate__fadeInUp'
            >
                <div className={styles.container} id='skill'>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            <LetterAnimation strArray={['S', 'k', 'i', 'l', 'l', ' s', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} letterClass={letterClass} index={1} />
                        </h1>
                        <p className={styles.description}>
                            Driven web developer with expertise in <span style={{ color: "#f06529" }}>HTML5</span> ,
                            <span style={{ color: "#28a4d9" }}>CSS</span> ,
                            <span style={{ color: "#efd81d" }}> JavaScipt</span>  (ES6+),
                            <span style={{ color: "#06B6D4" }}> Tailwind CSS</span>, and modern frameworks like
                            <span style={{ color: "#5ed4f4" }}> React</span>, <span style={{ color: "#fff" }}> Next.js</span>, and
                            <span style={{ color: "#358Ef1" }}> TypeScript</span>....
                        </p>
                        <p className={styles.description}>
                            While I'm not a professional designer, I bring a strong sense of aesthetics to my work,
                            resulting in responsive and user-focused websites built with mobile-first principles.
                            My passion lies in crafting performant, optimized code that delivers exceptional user experiences,
                            prioritizing both usability and accessibility. My dedication extends beyond project completion,
                            offering ongoing support to ensure your website's continued success.
                        </p>
                        <p className={styles.description}>
                            Explore my  <a href="https://www.linkedin.com/in/essaid-bouhenni-6206ab25b" style={{ color: '#0077B5' }} target='_blank'>LinkedIn</a>{' '}
                            profile for more details, access my{' '}
                            <a href="" style={{ color: '#c5974c' }}>CV</a>,
                            and discover my project portfolio on{' '}
                            <a href="https://github.com/Essaid08" target='_blank' style={{ color: '#9ca3af' }}>GitHub</a>.
                        </p>
                    </div>
                    <div className={styles.containerSkills}>
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skillItem} style={{ boxShadow: `0 10px 15px -3px rgba(${skill.style['shadow-color']} , 0.1), 0 4px 6px -2px rgba(${skill.style['shadow-color']} , 0.5)` }} >
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    <p>{skill.title}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
};
