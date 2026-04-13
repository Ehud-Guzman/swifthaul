import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Coverage from '../components/Coverage'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const CoveragePage = () => (
  <>
    <Helmet>
      <title>Coverage — SwiftHaul Logistics</title>
      <meta
        name="description"
        content="SwiftHaul operates across Nairobi, Mombasa, Kisumu, Eldoret, and Nakuru — with expansion into Uganda, Tanzania, and Rwanda coming soon."
      />
    </Helmet>

    <Navbar />
    <PageHeader
      label="Coverage"
      title="Where We Operate"
      subtitle="Covering major routes and corridors across the region."
    />
    <Coverage />
    <CTA />
    <Footer />
  </>
)

export default CoveragePage
