/** @format */

import React from "react";
import Skill from "../../components/Skills/Skill";
import Footer from "../../components/Footer";



import { GoMarkGithub } from "react-icons/go";
import { GiEarthAmerica } from "react-icons/gi";

import { SiNextDotJs } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { SiPostgresql } from "react-icons/si";

const icons  = {
    "SiNextDotJs" : <SiNextDotJs />,
    "SiCss3" : <SiCss3 />,
    "SiTailwindcss" :  <SiTailwindcss />,
    "FaReact" : <FaReact />,
    "FaPaypal" : <FaPaypal />,
    "FaMailBulk" : <FaMailBulk />,
    "FcAcceptDatabase" : <FcAcceptDatabase />,
    "SiPostgresql" : <SiPostgresql />
}

import { projectsData } from "../../components/Projects/projectsData";



export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData[params.id - 1];
  return { props: { project } };
}

export default function ProjectView({ project }) {
  console.log("we project", project);

  return (
    <div className="bg-gray-50 overflow-hidden ">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Project
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {project.name}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div
              className="relative text-base mx-auto max-w-prose w-11/12  hover:scale-105 transform shadow-2xl rounded-md "
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
            >
              <div className="p-2">
                <div className="  object-cover object-center  mx-auto">
                  <div className="p-2 text-3xl text-gray-500">
                    {project.year}
                  </div>
                  <div className="px-4 text-base md:text-xl text-gray-500">
                    {project.type=== "client"?  `Client: ${project.name}` : `Project type: ${project.type}`}
                    
                  </div>
                  <div className="px-4 text-base md:text-xl text-gray-500">
                    Technologies
                  </div>
                  <div className="flex mx-auto">
                    <div className=" grid  grid-cols-3  mx-auto">
                      {project.technologies.map((skill) => (
                        <Skill
                          width={73}
                          key={skill.name}
                          name={skill.name}
                          textSize="0.55rem"
                          icon={icons[skill.icon]}
                          color={skill.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{project.description1}</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>{project.description2}</p>

              <a
                className="mt-1"
                href={project.webLink}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 mt-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                  View Website &nbsp; <GiEarthAmerica />
                </button>
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  className="  inline-flex items-center px-4 py-3 mt-2  border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                  View Repository &nbsp; <GoMarkGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div  className="flex justify-center">
      <div className=" grid  grid-cols-1 justify-center  w-11/12 mx-auto " >
        {project.images.map((item, Idx) => (
          <img
            key={Idx}
            src={item}
            alt="project"
            width={650}
            
            className="mt-5 hover:scale-105 transform shadow-2xl rounded-md mx-auto"
          />
        ))}
      </div>
      </div>

      <Footer />
    </div>
  );
}
