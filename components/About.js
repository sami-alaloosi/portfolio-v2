/** @format */

import React from "react";
import SkillsCard from "./Skills/SkillsCard"
import Divider from "./Divider";


import { FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 overflow-hidden " id="about">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />

        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-indigo-600 sm:text-4xl uppercase">
              About Me
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
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/me.jpg"
                    alt="sami al aloosi"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              I'm a self-taught full-stack web developer, my interest in web development started in 2016. Ever since I was young I was fascinated with exploring new topics.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
              At the beginning of my web development journey I had a lot of ideas, but no direction. During that time, I started teaching myself programming by watching YouTube coding tutorial, Freecodecamp, and Udemy courses.
              </p>
              <p>
              Fast forward to 2020, I joined Lambda school to solidify my coding skills and have a hands-on experience in working on professional projects with a big team of developer.
              </p>

              <p className="text-center font-medium">
                Here are a few technologies I've been working with recently :
              </p>

              <Divider text={<FaCode className="text-xl" />} />

              <div className="flex justify-center  py-6">
                <SkillsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
