import React from 'react'
import { motion } from 'framer-motion'

const PageHeader = ({ label, title, subtitle }) => (
  <div
    className="relative pt-32 pb-20 text-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/images/hero-truck.jpg')", // Place a header background image in public/images/
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#0A1628]/75 to-[#1565C0]/60" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {label && (
        <span className="inline-block text-[#42A5F5] text-sm font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
          {label}
        </span>
      )}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
)

export default PageHeader