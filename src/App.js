import React from "react";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="bg-repeat ">
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
