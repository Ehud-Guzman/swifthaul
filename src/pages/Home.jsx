import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Truck, Package, Building2, Clock, BarChart2, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { services, testimonials } from '../data/content'

const iconMap = { Truck, Package, Building2, Clock, BarChart2, Shield }

// Show only the first 3 services as a teaser (with images)
const ServicesTeaser = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
          What We Do
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2 mb-4">
          Comprehensive Logistics Solutions
        </h2>
        <p className="text-[#37474F] text-lg max-w-xl mx-auto">
          From single parcels to industrial bulk freight — we have you covered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.slice(0, 3).map((service, i) => {
          const Icon = iconMap[service.icon]
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Service Image */}
              <div className="h-40 w-full overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#E3F2FD] rounded-lg w-8 h-8 flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 text-[#1565C0]" />}
                  </div>
                  <h3 className="text-[#0D1B2A] font-semibold text-lg">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#37474F] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[#1565C0] hover:text-[#1976D2] font-semibold text-sm transition-colors"
        >
          View all services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
)

// Show only the first 2 testimonials as a teaser
const TestimonialsTeaser = () => (
  <section className="py-24 bg-[#E3F2FD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.slice(0, 2).map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-[#37474F] italic text-sm leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1565C0] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm">{t.name}</div>
                <div className="text-[#78909C] text-xs mt-0.5">{t.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Home = () => (
  <>
    <Helmet>
      <title>SwiftHaul Logistics — Moving Cargo. Building Trust.</title>
      <meta
        name="description"
        content="SwiftHaul Logistics provides professional freight transport, last-mile delivery, warehousing, and fleet logistics across East Africa — on time, every time."
      />
      <meta property="og:title" content="SwiftHaul Logistics" />
      <meta
        property="og:description"
        content="Moving Cargo. Building Trust. Reliable logistics across East Africa."
      />
    </Helmet>

    <Navbar />
    <Hero />
    <Stats />
    <ServicesTeaser />
    <TestimonialsTeaser />
    <CTA />
    <Footer />
  </>
)

export default Home