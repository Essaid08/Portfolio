import { useState } from 'react';
import LetterAnimation from '../../components/letter-animation/LetterAnimation'
import { useEffect } from 'react';
import styles from './expeeince.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from 'react-icons/md';
import work from "../../data/work.json"
import ScrollAnimation from 'react-animate-on-scroll';


export const Experience = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <section>
            <div className={styles.container} id='experience'>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <LetterAnimation strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} letterClass={letterClass} index={1} />
                    </h1>

                    <VerticalTimeline
                    className={styles.timeline}>
                        {
                            work.map(work => (
                                <ScrollAnimation
                                    animateOnce
                                    duration={1.5}
                                    animateIn='animate__slideInRight'
                                    animateOut='animate__rollOut'
                                    key={work.date}>
                                    <VerticalTimelineElement
                                        className={styles.vertical}
                                        key={work.date}
                                        className={styles.item}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date={work.date}
                                        iconStyle={{ color: '#fff' }}
                                        icon={<MdWork />}
                                    >
                                        <h3 className="vertical-timeline-element-title" style={{ marginTop: '20px', }}>{work.role}</h3>
                                        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '25px' }}>{work.company}</h4>
                                        <p className={styles.description}>
                                            {work.desc}
                                        </p>
                                    </VerticalTimelineElement>
                                </ScrollAnimation>

                            ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};
