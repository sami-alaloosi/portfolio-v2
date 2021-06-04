import Head from 'next/head'

//  components inport 
import Hero from "../components/Hero"





export default function Home() {
  return (
    <div >
      <Head>
        <title>Sami Al Aloosi| Software Enginear </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
      
    </div>
  )
}
