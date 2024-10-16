import styles from './contact.module.css'
import { useEffect, useRef, useState } from 'react';
import LetterAnimation from '../../components/letter-animation/LetterAnimation';
import Lottie from 'lottie-web';
import contactAnimation from '../../../assets/hero/Animation - 1709681211799.json';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll';

export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const formInitialDetails = {
        name: "",
        email: '',
        subject: '',
        message: ''
    }

    const [fromDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send')
    const [isSubmiting, setIsSubmiting] = useState({
        content: '',
        nameClass: '',
        textColor: ''
    })

    const containerSvg = useRef(null)

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            animationData: contactAnimation,
            autoplay: true,
            container: containerSvg.current,
            loop: true,
            renderer: "svg",
        })
        return () => {
            animation.destroy()
        }
    }, [])

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...fromDetails,
            [key]: value
        })
        setButtonText('Send')
        setIsSubmiting({
            content: '',
            nameClass: '',
            textColor: ''
        })
    }

    const sendEmail = (e) => {

        e.preventDefault();
        setIsSubmiting({
            ...isSubmiting,
            content: 'Sending Email... , please wait .',
            nameClass: 'waiting',
            textColor: '#979494'
        })
        emailjs
            .sendForm('service_ujjmbhm', 'template_l3coosp', form.current, {
                publicKey: 'W7pOT04xJS2-uFJqi',
            }
            )
            .then(
                () => {
                    setButtonText('Done');
                    setFormDetails(formInitialDetails)
                    setIsSubmiting({
                        ...isSubmiting,
                        content: 'Message successfully sent!',
                        nameClass: 'sent',
                        textColor: '#05c405b0'
                    })
                },
                () => {
                    setIsSubmiting({
                        ...isSubmiting,
                        content: 'Failed to send the email, please try again',
                        nameClass: 'failed',
                        textColor: '#eb3b3b'
                    })

                }
            );
    }
    const articleRef = useRef(null)

    useEffect(() => {
        articleRef.current.className = isSubmiting.nameClass
        articleRef.current.style.color = isSubmiting.textColor
    }, [isSubmiting.nameClass, isSubmiting.textColor])

    return (
        <ScrollAnimation
            animateOnce
            duration={6}
            animateIn='animate__fadeIn'

        >
            <section className={styles.container} id="contact">
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <LetterAnimation strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' M', 'e']} letterClass={letterClass} index={1} />
                    </h1>
                    <p className={styles.description}>
                        Bring your vision to life. I'm a passionate developer ready to collaborate on impactful projects,
                        from design to development. Let's turn your ideas into reality, don't hesitate to contact me using form either.
                    </p>
                </div>
                <div className={styles.contactSection}>
                    <div className={styles.formSection}>
                        <h2>
                            <LetterAnimation strArray={['G', 'e', 't', ' ', 'I', 'n', ' ', ' T', 'o', 'u', 'c', 'h']} letterClass={letterClass} index={1} />
                        </h2>
                        <form onSubmit={sendEmail} ref={form}>
                            <ul>
                                <li className={styles.half}>
                                    <input
                                        type="text" value={fromDetails.name}
                                        placeholder='Name' required name='name'
                                        onChange={e => onFormUpdate('name', e.target.value)}
                                    />
                                </li>
                                <li className={styles.half}>
                                    <input
                                        type="email" value={fromDetails.email}
                                        placeholder='Email Address' required name='email'
                                        onChange={e => onFormUpdate('email', e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text" value={fromDetails.subject}
                                        placeholder='Subject' required name='subject'
                                        onChange={e => onFormUpdate('subject', e.target.value)}
                                    />
                                </li>
                                <li>
                                    <textarea
                                        required name='message'
                                        value={fromDetails.message} placeholder='Message'
                                        onChange={e => onFormUpdate('message', e.target.value)}
                                    />
                                </li>
                                <li className={styles.submitli}>
                                    {/* {isSubmiting && <p>{isSubmiting}</p>} */}
                                    <article ref={articleRef}>
                                        {isSubmiting.content}
                                    </article>
                                    <input type="submit" className={styles.btn} value={buttonText} />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div ref={containerSvg} className={styles.divSvg} id="animation-container"></div>
                </div>
            </section>
        </ScrollAnimation>

    )
} 
