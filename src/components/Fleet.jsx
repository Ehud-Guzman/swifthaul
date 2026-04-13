import React from 'react'
import { motion } from 'framer-motion'
import { fleet } from '../data/content'

const Fleet = () => (
  <section id="fleet" className="py-24 bg-gradient-to-b from-white to-[#F5F9FF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider bg-[#E3F2FD] px-4 py-1.5 rounded-full">
          Our Fleet
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-4 mb-4">
          The Right Vehicle for Every Job
        </h2>
        <p className="text-[#37474F] text-lg max-w-2xl mx-auto">
          From small parcel vans to heavy semi-trailers — we have the capacity you need.
        </p>
      </motion.div>

      {/* Fleet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fleet.map((vehicle, index) => (
          <motion.div
            key={vehicle.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Vehicle Image */}
            <div className="h-48 w-full overflow-hidden bg-gray-100">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay at bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-[#0D1B2A] text-xl mb-2">
                {vehicle.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#1565C0] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {vehicle.capacity}
                </span>
              </div>
              <p className="text-[#78909C] text-sm leading-relaxed">
                {vehicle.bestFor}
              </p>
            </div>

            {/* Decorative bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565C0] to-[#42A5F5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Fleet