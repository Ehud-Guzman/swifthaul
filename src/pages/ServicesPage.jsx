import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Our Services — SwiftHaul Logistics</title>
      <meta
        name="description"
        content="Freight transport, last-mile delivery, warehousing, express logistics, supply chain management and cargo insurance across East Africa."
      />
    </Helmet>

    <Navbar />
    <PageHeader
      label="Our Services"
      title="Comprehensive Logistics Solutions"
      subtitle="Tailored to your cargo needs — from single parcels to industrial bulk freight."
    />
    <Services />
    <HowItWorks />
    <CTA />
    <Footer />
  </>
)

export default ServicesPage
