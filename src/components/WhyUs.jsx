import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { whyUs } from '../data/content'

const WhyUs = () => (
  <section id="why-us" className="py-24 bg-[#E3F2FD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2 mb-3">
            Why Clients Trust SwiftHaul
          </h2>
          <p className="text-[#37474F] text-lg mb-10">
            We don't just move cargo — we move it right.
          </p>

          <div className="space-y-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#1565C0] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0D1B2A]">{item.title}</h4>
                  <p className="text-[#37474F] text-sm mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
        >
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
            alt="SwiftHaul logistics warehouse operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/25 to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
)

export default WhyUs
