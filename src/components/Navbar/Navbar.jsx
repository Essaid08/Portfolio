import { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className={styles.navbar} >
                    </div >
                )
                    : (<header>

                        <nav className={styles.navbar}>
                            <a href="/" className={styles.title}>SaidWebfolio</a>
                            
                            <div className={styles.menu}>
                                <img
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    src={isMenuOpen ?
                                        getImageUrl('nav/closeIcon.png')
                                        : getImageUrl('nav/menuIcon.png')
                                    }
                                    className={styles.menuBtn}
                                    alt='menu-button'
                                />
                                <ul
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`${styles.menuitems} ${isMenuOpen && styles.menuOpen}`}
                                >
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#skill">Skills</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#experience">Work</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    )
            }
        </>
    )
}
