import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '../data/content'

const CTA = () => (
  <section className="py-16 bg-[#1565C0]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
      >
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Need to move cargo today?
          </h2>
          <p className="text-white/75 text-base flex items-center justify-center lg:justify-start gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            Call us now: {contact.phone}
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-white text-[#1565C0] hover:bg-[#E3F2FD] px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 shadow-lg"
        >
          Get a Free Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
)

export default CTA
