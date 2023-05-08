import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <br />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 inline-flex">
            <p className="text-malachite">
              01.
            </p>&nbsp;Work Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experience) => ( // see JSON formatted list of experiences in "data.js" file
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {experience.name}
                  </span>
                  <span className="text-malachite text-sm uppercase">
                    {"@ " + experience.company}
                  </span>
                </span>
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                {experience.bullet1 !== "" ? 
                  <p className="leading-relaxed mb-6">{experience.bullet1}</p> 
                  : 
                  <></>
                }
                {experience.bullet2 !== "" ? 
                  <p className="leading-relaxed mb-6">{experience.bullet2}</p> 
                  : 
                  <></>
                }
                {experience.bullet3 !== "" ? 
                  <p className="leading-relaxed mb-6">{experience.bullet3}</p> 
                  : <></>
                }
                {experience.bullet4 !== "" ? 
                  <p className="leading-relaxed mb-6">{experience.bullet4}</p> 
                  : <></>
                }
                <div className="inline-flex items-center">
                  <img
                    alt="experience"
                    src={require("../assets/" + experience.image)}
                    className="w-1/4 rounded-full flex-shrink-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}