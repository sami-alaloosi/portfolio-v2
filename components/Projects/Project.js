/** @format */

import React from "react";
import Link from "next/link"




export default function Project({name, description, img, Idx}) {
  return (
    <div className="bg-gray-50 mt-10 mx-auto  w-11/12  md:w-9/12 hover:scale-105 transform">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-gray-50" />
          <div className="flex-1" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold  sm:text-4xl"> 
                  <span className="block text-red-900">
                    {name}
                  </span>
                </h2>
                <p className="mt-4 text-xs leading-6 text-orange-50">
                  {description}
                </p>
                <Link
                  href={`/project/${Idx}`}   
                >
                <button className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"> Learn more</button>
                  
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
               
                src={img}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
