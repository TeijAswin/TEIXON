import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import TechSphere from "./components/TechSphere";
import TechStack from "./components/TechStack";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      <div className="overflow-x-hidden">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Stats />
        <Services />
        <TechSphere />
        <TechStack />
        <WhyUs />
        <Portfolio />
        <Team />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
