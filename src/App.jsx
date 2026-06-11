import React from 'react'
import Navbar from './components/Navbar'
import AnnouncementBar from './components/AnnouncementBar'
import HeroSection from './sections/HeroSection'
import ClinicSection from './sections/ClinicSection'
import MarqueeBanner from './sections/MarqueeBanner'
import WhyWhistle from './sections/WhyWhistle'
import WhistleDifference from './sections/WhistleDifference'
import HowItWorks from './sections/HowItWorks'
import Pricing from './sections/Pricing'
import ComparisonTable from './sections/ComparisonTable'
import Results from './sections/Results'
import HappySmilers from './sections/HappySmilers'
import DoctorLed from './sections/DoctorLed'
import FAQ from './sections/FAQ'
import StickyFooterCTA from './components/StickyFooterCTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <AnnouncementBar />
      <HeroSection />
      <ClinicSection />
      <MarqueeBanner />
      <WhyWhistle />
      <WhistleDifference />
      <HowItWorks />
      <Pricing />
      <ComparisonTable />
      <Results />
      <HappySmilers />
      <DoctorLed />
      <FAQ />
      <Footer />
      <StickyFooterCTA />
    </div>
  )
}
