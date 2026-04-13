import React from 'react'
import { motion } from 'framer-motion'
import { steps } from '../data/content'

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-[#E3F2FD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
          How It Works
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2 mb-4">
          Simple. Fast. Reliable.
        </h2>
        <p className="text-[#37474F] text-lg">
          Getting your cargo moved in 4 easy steps.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {/* Connecting dashed line (desktop only) */}
        <div
          className="hidden lg:block absolute top-10 left-[14%] right-[14%] h-px border-t-2 border-dashed border-[#1565C0]/25 z-0 pointer-events-none"
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-[#1565C0] rounded-full flex items-center justify-center mb-5 shadow-lg ring-4 ring-[#E3F2FD]">
              <span className="text-white font-bold text-xl">{step.number}</span>
            </div>
            <h3 className="font-bold text-[#0D1B2A] text-lg mb-2">{step.title}</h3>
            <p className="text-[#37474F] text-sm leading-relaxed max-w-[180px] mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks
