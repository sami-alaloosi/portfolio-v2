/** @format */

import React from "react";

import Project from "./Project";

import { IoCodeWorking } from "react-icons/io5"


const projects = [
  { name: "Neat code", description: "Neat Code provide you with pre-selected questions that are specifically chosen to maximize your pattern recognition and help you ace the coding interview. Our questions will help you ramp up in technical interview questions, all the stuff you need none of your time wasted.", link: "https://angry-montalcini-a182f3.netlify.app/", img: "/images/neatCode.png" },
  { name: "Password Generator", description: "This tool will allow you to automatically generate passwords based on guidelines that you set to create strong and unpredictable passwords for each of your accounts.", link: "https://frosty-fermi-79098d.netlify.app/#main_section", img: "/images/password.jpg" },
  { name: "Chrome Extension", description: "Quick Media Accounts Launcher, this extension will allow the user to access all of your media accounts with a click of a button.", link: "https://github.com/sami-alaloosi/Quick-Media-Accounts-Launcher", img: "/images/launcher.jpg" },
];

export default function ProjectsCard() {
  return (
    <div className="bg-gray-50 my-7">
      
      <div> 
      <h2 className="  flex  justify-center text-3xl font-extrabold text-gray-700 text-center sm:text-4xl lg:text-5xl  py-16">
          Recent Projects  &nbsp;
          <IoCodeWorking />
        </h2>
      
      </div>
      
      {projects.map((item) => (
        <Project key={item.name} name={item.name} description={item.description} link={item.link} img={item.img} />
      ))}
    </div>
  );
}
