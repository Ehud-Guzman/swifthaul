import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Fleet from '../components/Fleet'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const FleetPage = () => (
  <>
    <Helmet>
      <title>Our Fleet — SwiftHaul Logistics</title>
      <meta
        name="description"
        content="Mini vans, 3-ton trucks, flatbeds and semi-trailers — SwiftHaul has the right vehicle for every cargo need."
      />
    </Helmet>

    <Navbar />
    <PageHeader
      label="Our Fleet"
      title="The Right Vehicle for Every Job"
      subtitle="From small parcel vans to heavy semi-trailers — we match the right vehicle to your cargo."
    />
    <Fleet />
    <CTA />
    <Footer />
  </>
)

export default FleetPage
