import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../data/content'

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#37474F] italic text-sm leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </p>

            {/* Author */}
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

export default Testimonials
