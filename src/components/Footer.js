import React from "react";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <section id="footer" className="bg-gray-800">
            <div className="container mx-auto flex flex-wrap p-10 md:flex-row items-center justify-center space-x-5">
            <a
                href="https://www.linkedin.com/in/matt-schwarz/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-islamic-green text-4xl" />
            </a>
            <a
                href="https://github.com/mjschwarz"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithubSquare className="text-islamic-green text-4xl" />
            </a>
            </div>
        </section>
    );
}