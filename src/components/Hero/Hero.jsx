import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import LetterAnimation from "../letter-animation/LetterAnimation";
import Loader from "react-loaders";
import ScrollAnimation from "react-animate-on-scroll";

export const Hero = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);

  const nameArray = ["A", "s", "s", "a", "i", "d", " ", "B", "o", "u", "h", "e", "n", "n", "i"];

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Assaid_Bouhenni_CV.pdf";
    link.setAttribute("download", "Assaid-Bouhenni-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <section className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <LetterAnimation
                letterClass={letterClass}
                strArray={nameArray}
                index={1}
              />
            </h1>
            <ScrollAnimation
              offset={0}
              animateOnce
              className={styles.btnAnima}
              animateIn="animate__fadeInLeft"
              duration={2}
            >
              <p className={styles.description}>
                Full Stack Developer specializing in <strong>React</strong>,{" "}
                <strong>Next.js</strong>, <strong>Golang</strong>, and{" "}
                <strong>Nest.js</strong>. Passionate about building scalable,
                high-performance web applications with clean UI and optimized
                backend systems.
              </p>

              <div className={styles.buttons}>
                <button onClick={downloadPDF} className={styles.contactBtn}>
                  Download CV
                </button>
                <a
                  href="#contact"
                  className={styles.contactBtn}
                >
                  Contact Me
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles.divImg}>
            <ScrollAnimation
              offset={0}
              animateOnce
              duration={2}
              animateIn="animate__fadeInRight"
            >
              <img
                className={styles.heroImg}
                src={getImageUrl("hero/career.png")}
                alt="Assaid Bouhenni"
                loading="lazy"
              />
            </ScrollAnimation>
          </div>

          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </section>
      )}
    </>
  );
};
