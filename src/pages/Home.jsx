import React from 'react'
import ThemeToggle from '../components/ThemeToggle'

import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle*/}
        <ThemeToggle />

        {/*Background Efect */}
        <StarBackground />
        
        {/* NavBar*/}
        <Navbar />

        {/*Main Content */}
        <main>
          <Hero/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
        </main>
        <Footer/>
        {/*Footer */}
    </div>
  )
}

export default Home