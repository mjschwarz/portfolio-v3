import React from "react";
import portrait from "../assets/portrait.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p mb-8 leading-relaxed>
            Hi, I'm
          </p>
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-malachite">
            Matt Schwarz.
          </h1>
          <h2 className="text-white">Computer Science @ Vanderbilt</h2>
          <br />
          <p className="mb-8 leading-relaxed">
            I'm a computer science student at Vanderbilt University. 
            Currently, I'm interning at Walmart for Summer 2023.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-islamic-green border-0 py-2 px-6 focus:outline-none hover:bg-dark-green rounded text-lg">
              See My Projects
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-0">
          <img
            className="object-cover object-center rounded"
            alt="Portrait"
            src={portrait}
          />
        </div>
      </div>
    </section>
  );
}