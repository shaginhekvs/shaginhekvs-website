import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import Header from '../components/Header'
import AboutJs from '../components/AboutJs'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonials from  '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import resumeData from '../resumeData';


const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div className="App">

        <AboutJs resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        
      </div>
      </AnimatedBox>
    </Layout>
  )
}

export default About
