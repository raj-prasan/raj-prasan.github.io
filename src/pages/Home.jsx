import React from 'react'
import ThemeToggle from '../components/ThemeToggle'

import StarBackground from '../components/StarBackground'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle*/}
        <ThemeToggle />

        {/*Background Efect */}
        <StarBackground />
        
        {/* NavBar*/}


        {/*Main Content */}
        {/*Footer */}
    </div>
  )
}

export default Home