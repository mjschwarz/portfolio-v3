import React from "react";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <section id="footer" className="bg-gray-800">
            <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center justify-center">
            <a
                href="https://www.linkedin.com/in/matt-schwarz/"
                target="_blank">
                <FaLinkedin className="text-islamic-green text-4xl mr-5" />
            </a>
            <a
                href="https://github.com/mjschwarz"
                target="_blank">
                <FaGithubSquare className="text-islamic-green text-4xl" />
            </a>
            </div>
        </section>
    );
}