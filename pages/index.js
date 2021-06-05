/** @format */

import Head from "next/head";

//  components import

import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work/Work";
import ProjectsCard from "../components/Projects/ProjectsCard"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sami Al Aloosi| Software Enginear </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Work />

      <ProjectsCard />
      
    </div>
  );
}
