import { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
import LetterAnimation from '../letter-animation/LetterAnimation'
import Loader from 'react-loaders'

export const Hero = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(false);
    const nameArray = ['H', 'i', ' ', 'I', "'", 'm', ' ', 'S', 'a', 'i', 'd'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 90000)
    }, [])

    return (
        <>
            {loading ?
                (
                    <Loader type="pacman" />
                )
                : (
                    <section className={styles.container}>
                        <div className={styles.content}>
                            <h1 className={styles.title} >
                                <LetterAnimation letterClass={letterClass} strArray={nameArray} index={1} />
                            </h1>
                            <p className={styles.description}>Welcome to my portfolio! I&apos;m a passionate web developer specializing in React and Node.js.
                                Reach out if you&apos;d like to Explore my projects and technical expertise.
                            </p>
                            <a href="mailto:assaidbouhenni3@gmail.com" className={styles.contactBtn}>Contact Me</a>
                        </div>
                        <img className={styles.heroImg} src={getImageUrl('hero/full.jpg')} alt="" />
                        <div className={styles.topBlur} />
                        <div className={styles.bottomBlur} />
                    </section>
                )
            }
        </>
    )
}
