import { useEffect, useState } from 'react';
import styles from './Project.module.css'
import LetterAnimation from '../../components/letter-animation/LetterAnimation';
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';
import { FaPersonCircleQuestion, FaEarthAmericas } from "react-icons/fa6";


const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [listProjects] = useState(projects)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <section className={styles.container} id='projects'>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <LetterAnimation strArray={['M', 'y', '', 'W', 'o', 'r', 'k', ' ', '&', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} letterClass={letterClass} index={1} />
                </h1>
                <p className={styles.description}>
                    Step into my creative world! Explore a diverse portfolio showcasing my technical expertise and
                    passion for problem-solving. Each project reflects a unique challenge overcome and a valuable lesson learned. Dive in, spark your curiosity,
                    and let's explore how we can collaborate to bring your vision to life.
                </p>
            </div>
            <div className={styles.list}>
                {
                    listProjects.map((value, key) => (
                        <div key={key} className={styles.item}>
                            <div className={styles.images}>
                                <a  href={value.demo} target='_blank'>
                                    <img src={getImageUrl(value.imageSrc)} alt={value.title} />
                                </a>
                            </div>
                            <div className={styles.itemContent}>
                                <h3>{value.title}</h3>
                                <div className={styles.des}>{value.description}</div>
                                <div className={styles.mission}>
                                    <div><FaPersonCircleQuestion /></div>
                                    <div>
                                        <h4>Mission</h4>
                                        <div className={styles.des}>{value.misssion}</div>
                                    </div>
                                </div>
                                <div className={styles.mission}>
                                    <div><FaEarthAmericas /></div>
                                    <div>
                                        <h4>Tech Stacks</h4>
                                        <div className={styles.des}>
                                            {
                                                value.skills.map((skill, id) => (
                                                    <span key={id * 3} id={skill.toLowerCase()}>{skill}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btns}>
                                    <button><a href={value.demo} target='_blank'>Demo</a></button>
                                    <button><a href={value.source} target='_blank'>Source</a></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Project