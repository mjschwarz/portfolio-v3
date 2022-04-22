import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, []);

  return (
    <>
      {loading === false ? 
      ( 
      <main className="text-gray-400 bg-gray-900 cursor-cell font-mono">
        <Navbar />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      ) : 
      (
      <Loader fullscreen={true} color={"#00FF41"} colSize={16} />
      )}
    </>
  );
}