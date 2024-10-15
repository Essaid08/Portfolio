import { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
import LetterAnimation from '../letter-animation/LetterAnimation'
import Loader from 'react-loaders'
import ScrollAnimation from 'react-animate-on-scroll';
export const Hero = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(false);
    const nameArray = ['H', 'i', ' ', 'I', "'", 'm', ' ', 'S', 'a', 'i', 'd'];

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/public/Said-web-2years.pdf'; 
        link.setAttribute('download', 'Said-web-2years.pdf'); 
        document.body.appendChild(link); 
        link.click(); 
        link.parentNode.removeChild(link); 
    };

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
                            <ScrollAnimation
                                animateOnce
                                className={styles.btnAnima}
                                animateIn='animate__fadeInLeft'
                                duration={3}>
                                <p className={styles.description}>
                                    Welcome to my portfolio! I&apos;m a passionate web developer specializing in React and Node.js.
                                    Reach out if you&apos;d like to Explore my projects and technical expertise.
                                </p>
                                <button
                                    onClick={downloadPDF}
                                    href="mailto:assaidbouhenni3@gmail.com"
                                    className={styles.contactBtn}>
                                        Download Cv
                                </button>
                            </ScrollAnimation>
                        </div>
                        <div className={styles.divImg}>
                            <ScrollAnimation
                                animateOnce
                                duration={3}
                                animateIn='animate__fadeInRight'>
                                <img className={styles.heroImg} src={getImageUrl('hero/one.jpg')} alt="hero" />
                            </ScrollAnimation>
                        </div>
                        <div className={styles.topBlur} />
                        <div className={styles.bottomBlur} />
                    </section>
                )
            }
        </>
    )
}
