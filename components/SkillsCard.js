/** @format */

import React from "react";

import Skill from "./Skill";
import { SiDotNet } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const skills = [
  { name: "C#", icon: "C#" , color: 0 },
  { name: "ASP.NET", icon: <SiDotNet /> , color: 1 },
  { name: "JavaScript", icon: <SiJavascript />, color: 2 },
  { name: "Typescript", icon: <SiTypescript /> , color: 1 },
  { name: "React.JS", icon: <FaReact /> , color: 3 },
  { name: "Next.JS", icon: <SiNextDotJs /> , color: 4 },
  { name: "Node.JS", icon: <FaNodeJs /> , color: 5 },
  { name: "Redux", icon: <SiRedux /> , color: 0 },
  { name: "Python", icon: <FaPython /> , color: 3 },
  { name: "SQL", icon: <SiPostgresql /> , color: 6 },
  { name: "MongoDB", icon: <SiMongodb />  , color: 5},
];

export default function SkillsCard() {
  return (
    <div className="grid row-auto   grid-cols-3  sm:grid-cols-5  md:grid-cols-6  lg:grid-cols-5   xl:grid-cols-6 ">
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
      ))}
    </div>
  );
}
