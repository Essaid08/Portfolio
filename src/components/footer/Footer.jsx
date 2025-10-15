import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from './footer.module.css'
import { BsGithub } from 'react-icons/bs'
import ScrollAnimation from 'react-animate-on-scroll';


const Footer = () => {
    return (
        <ScrollAnimation
            animateOnce
            duration={1.5}
            animateIn='animate__slideInLeft'>
            <footer className={styles.container}>
                <div className={styles.line}></div>
                <div className={styles.content}>
                    <div className={styles.copy}>
                        Copyright © 2023 Assaid
                    </div>
                    <div className={styles.medias}>
                        <a href='https://www.linkedin.com/in/said-bouhenni/' target='_blank' rel="noopener noreferrer">
                            <FaLinkedin size={36} color="yellow" />
                        </a>
                        <a >
                            <FaTwitter size={36} color="yellow" />
                        </a>
                        <a href='https://www.facebook.com/ni.rou.96?mibextid=ZbWKwL' target='_blank' rel="noopener noreferrer">
                            <FaFacebook size={36} color="yellow" />
                        </a>
                        <a href='https://github.com/Essaid08' target='_blank' rel="noopener noreferrer">
                            <BsGithub size={36} color="yellow" />
                        </a>
                    </div>

                </div>
            </footer>
        </ScrollAnimation>
    )
}

export default Footer