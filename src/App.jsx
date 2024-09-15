import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from './components/AboutScss/About'
import { Skill } from "./components/skillAnimation/Skill";
import { useEffect, useState } from "react";
import Loader from 'react-loaders'
import Project from "./components/my-work/Project";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import Footer from "./components/footer/Footer";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [])

  return (
    <main className="App">
      {loading ?
        (<div className="loading-background">
          <Loader type="pacman" />
        </div>
        )
        : (
          <>
            <div className="home">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Skill />
            <Project/>
            <Experience/>
            <Contact/>
            <Footer/>
          </>
        )}
    </main>
  );
}

export default App;
