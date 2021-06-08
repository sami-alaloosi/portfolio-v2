/** @format */

import Head from "next/head";

//  components import

import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work/Work";
import ProjectsCard from "../components/Projects/ProjectsCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <div className="bg-gray-50 m-0">
      <Head>
        <title>Sami Al Aloosi| Software Enginear </title>
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <Hero />
      <About />
      <Work />

      <ProjectsCard />

      <Contact />

      <Footer />
     
    </div>
  );
}
