/** @format */

import React from "react";

import Project from "./Project";

import { IoCodeWorking } from "react-icons/io5"

import {projectsData} from "./projectsData"


export default function ProjectsCard() {
  return (
    <div className="bg-gray-50 my-7" id="projects">
      
      <div> 
      <h2 className="  flex  justify-center text-3xl font-extrabold text-gray-700 text-center sm:text-4xl lg:text-5xl  py-16">
          Recent Projects  &nbsp;
          <IoCodeWorking />
        </h2>
      
      </div>
      
      {projectsData.map((item) => (
        <Project key={item.name} name={item.name} description={item.description1} img={item.images[0]} Idx={item.id} />
      ))}
    </div>
  );
}
