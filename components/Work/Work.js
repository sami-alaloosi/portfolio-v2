/** @format */

import React, { useState } from "react";

import { CheckCircleIcon, StarIcon } from "@heroicons/react/solid";

import WorkButtons from "./WorkButtons";

const jobs = [
  {
    name: "Lambda School",
    link: "https://lambdaschool.com/",
    position: "Team Leader",
    date: "May - December 2020",
    responsibilities: [
      "Utilized the agile methodology to lead teams of 10 early-career engineers towards successful full product developments",
      "Led 1:1 code reviews to assess students strengths and ensure the implementation of coding standards and best practices",
      "Reinforced technical concepts by facilitating small group study sessions and 1:1 daily check-ins",
    ],
  },
  {
    name: "LWK",
    link: "https://livingwellkent.org/index.html",
    position: "Project Manager",
    date: "February 2016 - June 2019",
    responsibilities: [
      "Managed teams of 100+ volunteers to ensure the success of the restoration of an abandoned greenhouse to create the LWK's greenhouse",
      "Overseen grants calendar, ensuring that proposals are submitted and reporting takes place on a timely basis",
      "Ensured that the organization recruits new team members with attention to racial and geographic equity",
      "Helped  maintaining and improving the organization's website",
    ],
  },
];

export default function Work() {
  const [open, setOpen] = useState(0);
  return (
    <div className="bg-gray-100">
      <div className=" relative pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl lg:text-5xl">
              WHERE I'VE WORKED
            </h2>
            <div className=" w-11/12 sm:w-8/12  md:w-5/12 m-auto mt-5 ">
              <WorkButtons open={open} setOpen={setOpen} jobs={jobs} />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative mt-8 bg-white pb-16 sm:mt-6 sm:pb-20 lg:pb-28  ">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex w-12/12 md:w-8/12">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12 ">
                <h3 className="text-2xl font-extrabold text-gray-700 sm:text-3xl">
                  {jobs[open].position}
                  <a
                    href={jobs[open].link}
                    target="_blank"
                    className="text-red-400 hover:text-red-500"
                  >
                    {" "}
                    @ {jobs[open].name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{jobs[open].date}</p>

                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-xs  md:text-sm tracking-wider font-semibold  text-indigo-500">
                      <span className="block md:inline"> Responsibilities</span>
                      <span className="block md:inline">
                        {" "}
                        and Accomplishments
                      </span>
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {jobs[open].responsibilities.map((item) => (
                      <li key={item} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{item}</p>
                      </li>
                    ))}
                    {open === 1 && (
                      <li
                        key="award"
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <StarIcon
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Awarded the{" "}
                          <span className="font-semibold text-md">
                            2018 LWK Driving Success award
                          </span>{" "}
                          for managing and enabling the success of Kent East
                          Hill farmers market for the year of 2018
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
