import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Package, Building2, Clock, BarChart2, Shield } from 'lucide-react'
import { services } from '../data/content'

const iconMap = { Truck, Package, Building2, Clock, BarChart2, Shield }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
          What We Do
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2 mb-4">
          Comprehensive Logistics Solutions
        </h2>
        <p className="text-[#37474F] text-lg max-w-2xl mx-auto">
          Tailored to your cargo needs — from single parcels to industrial bulk freight.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon]
          return (
            <motion.div
              key={service.title}
              variants={card}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Service Image */}
              <div className="h-44 w-full overflow-hidden bg-gray-100">
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
      </motion.div>
    </div>
  </section>
)

export default Services