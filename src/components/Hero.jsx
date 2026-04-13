import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: "url('images/hero-truck (1).jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/92 via-[#0A1628]/78 to-[#1565C0]/55" />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-7"
      >
        <span className="w-2 h-2 bg-[#42A5F5] rounded-full animate-pulse" />
        Reliable Logistics Solutions
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
      >
        Moving Cargo.
        <br />
        <span className="text-[#42A5F5]">Building Trust.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        We handle freight, last-mile delivery, and fleet logistics across East
        Africa — on time, every time.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          to="/contact"
          className="bg-[#1565C0] hover:bg-[#1976D2] text-white px-8 py-4 rounded-xl font-semibold text-base flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#1565C0]/30"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/services"
          className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base flex items-center gap-2 transition-all duration-200"
        >
          Our Services
          <ChevronDown className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
    >
      <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  </section>
)

export default Hero