import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-malachite">
            Matt Schwarz
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experiences" className="mr-5 hover:text-malachite inline-flex">
            <p className="text-malachite"> 
              01.
            </p>&nbsp;Work Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-malachite inline-flex">
            <p className="text-malachite"> 
              02.
            </p>&nbsp;Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-malachite inline-flex">
            <p className="text-malachite"> 
              03.
            </p>&nbsp;Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-malachite inline-flex">
            <p className="text-malachite"> 
              04.
            </p>&nbsp;Contact
          </a>
        </nav>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 text-malachite border-solid border-2 border-malachite py-1 px-3 focus:outline-none hover:bg-dark-green rounded text-base mt-4 md:mt-0">
          Resume
          <DownloadIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}