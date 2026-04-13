import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import FleetPage from './pages/FleetPage'
import AboutPage from './pages/AboutPage'
import CoveragePage from './pages/CoveragePage'
import Contact from './pages/Contact'

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet"    element={<FleetPage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
)

export default App
