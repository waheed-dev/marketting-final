import type { NextPage } from 'next'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import Mission from '../components/mission/Mission'
import Steps from '../components/steps/Steps'
import Footer from  '../components/footer/footer'
import About from '../components/about us/About'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div className={''}>
        <Head>
            <title>Sandiip porwal</title>
        </Head>
        <Hero/>
        <About/>
        <Features/>
        <Mission/>
        <Steps/>
    </div>
  )
}

export default Home
