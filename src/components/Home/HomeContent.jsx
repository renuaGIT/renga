import React from 'react'
import "./home.css"
import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomePartners from './Partners/HomePartners'
import HomeWorks from './HomeWorks'
import HomeAboutSecondary from './HomeAboutSecondary'

const HomeContent = () => {
  return (
    <main className='content'>
      <HomeHero />
      <HomeAbout />
      <HomePartners />
      <HomeWorks />
      <HomeAboutSecondary />
    </main>
  )
}

export default HomeContent
