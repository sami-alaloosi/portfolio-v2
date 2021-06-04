import React from "react"

import { MailIcon } from "@heroicons/react/outline";

import Nav from "./Nav"

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        
        <Nav />

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">

          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Sami Al Aloosi.</span>
              <span className="block xl:inline">I love all aspects of</span>
              <span className="block text-indigo-600 xl:inline"> web development!</span>
            </h1>

            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a self-taught Full-Stack web developer who loves solving problems, learning new technologies, and languages.

            I enjoy coding things from scratch that improves the lives of those around me!
            </p>

            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">

              


              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              
                <a
                  href="mailto:alaloosi.sami@gmail.com"

                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white ƒ:bg-gray-50 md:py-4 md:text-lg md:px-10 hover:bg-gray-50"
                >
                <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-teal-200"
                        aria-hidden="true"
                      />
                      &nbsp;
                    Get In Touch
                </a>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
