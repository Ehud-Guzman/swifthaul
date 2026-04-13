import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us — SwiftHaul Logistics</title>
      <meta
        name="description"
        content="Why clients trust SwiftHaul — vetted drivers, real-time updates, flexible vehicles, and transparent pricing."
      />
    </Helmet>

    <Navbar />
    <PageHeader
      label="About Us"
      title="Why Clients Trust SwiftHaul"
      subtitle="We don't just move cargo — we move it right."
    />
    <WhyUs />
    <Testimonials />
    <CTA />
    <Footer />
  </>
)

export default AboutPage
