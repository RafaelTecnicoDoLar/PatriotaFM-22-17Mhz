import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Announcement from './components/Announcement'
import BoxMusic from './components/BoxMusic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection/>
    <Announcement/>
    <BoxMusic/>
  </StrictMode>
)
