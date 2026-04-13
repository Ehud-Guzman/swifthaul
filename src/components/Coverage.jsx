import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'
import { coverage } from '../data/content'

const Coverage = () => (
  <section id="coverage" className="py-24 bg-[#E3F2FD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#1565C0] text-sm font-semibold uppercase tracking-wider">
            Coverage
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mt-2 mb-3">
            Where We Operate
          </h2>
          <p className="text-[#37474F] text-lg mb-10">
            Covering major routes and corridors across the region.
          </p>

          <div className="space-y-7">
            {/* Key Hubs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#1565C0]" />
                <h4 className="font-semibold text-[#0D1B2A]">Key Hubs</h4>
              </div>
              <div className="flex flex-wrap gap-2 ml-7">
                {coverage.hubs.map((hub) => (
                  <span
                    key={hub}
                    className="bg-white text-[#1565C0] text-sm font-medium px-3 py-1 rounded-full border border-[#1565C0]/20 shadow-sm"
                  >
                    {hub}
                  </span>
                ))}
              </div>
            </div>

            {/* Corridors */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Navigation className="w-5 h-5 text-[#1565C0]" />
                <h4 className="font-semibold text-[#0D1B2A]">Major Corridors</h4>
              </div>
              <ul className="ml-7 space-y-1.5">
                {coverage.corridors.map((c) => (
                  <li key={c} className="text-[#37474F] text-sm flex items-center gap-2">
                    <span className="text-[#1565C0] font-bold">→</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#42A5F5]" />
                <h4 className="font-semibold text-[#0D1B2A]">Coming Soon</h4>
              </div>
              <div className="flex flex-wrap gap-2 ml-7">
                {coverage.comingSoon.map((country) => (
                  <span
                    key={country}
                    className="bg-[#42A5F5]/10 text-[#1565C0] text-sm font-medium px-3 py-1 rounded-full border border-[#42A5F5]/30"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — stylised map graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#78909C] mb-4 text-center">
              Coverage Map — East Africa
            </p>
            <div className="relative mx-auto" style={{ maxWidth: 320 }}>
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Kenya outline — simplified polygon */}
                <path
                  d="M95,55 L165,45 L205,75 L225,115 L210,160 L220,200 L185,235 L155,245 L120,225 L88,200 L68,160 L75,115 Z"
                  fill="#1565C0"
                  fillOpacity="0.12"
                  stroke="#1565C0"
                  strokeWidth="1.5"
                />

                {/* Route lines */}
                <line x1="148" y1="155" x2="192" y2="190" stroke="#42A5F5" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="148" y1="155" x2="93" y2="145" stroke="#42A5F5" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="148" y1="155" x2="108" y2="98" stroke="#42A5F5" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="148" y1="155" x2="132" y2="122" stroke="#42A5F5" strokeWidth="1.5" strokeDasharray="6 4" />

                {/* Nairobi — main hub */}
                <circle cx="148" cy="155" r="9" fill="#1565C0" />
                <circle cx="148" cy="155" r="5" fill="white" />
                <text x="162" y="159" fill="#0D1B2A" fontSize="11" fontWeight="700">Nairobi</text>

                {/* Other hubs */}
                <circle cx="192" cy="190" r="6" fill="#1976D2" />
                <circle cx="192" cy="190" r="3" fill="white" />
                <text x="200" y="194" fill="#37474F" fontSize="10">Mombasa</text>

                <circle cx="93" cy="145" r="6" fill="#1976D2" />
                <circle cx="93" cy="145" r="3" fill="white" />
                <text x="60" y="140" fill="#37474F" fontSize="10">Kisumu</text>

                <circle cx="108" cy="98" r="6" fill="#1976D2" />
                <circle cx="108" cy="98" r="3" fill="white" />
                <text x="115" y="93" fill="#37474F" fontSize="10">Eldoret</text>

                <circle cx="132" cy="122" r="6" fill="#1976D2" />
                <circle cx="132" cy="122" r="3" fill="white" />
                <text x="142" y="117" fill="#37474F" fontSize="10">Nakuru</text>

                {/* Coming soon — faded */}
                <circle cx="148" cy="60" r="5" fill="#42A5F5" fillOpacity="0.4" />
                <text x="156" y="64" fill="#78909C" fontSize="9">Uganda</text>

                <circle cx="175" cy="255" r="5" fill="#42A5F5" fillOpacity="0.4" />
                <text x="183" y="259" fill="#78909C" fontSize="9">Tanzania</text>

                <circle cx="88" cy="55" r="5" fill="#42A5F5" fillOpacity="0.4" />
                <text x="56" y="50" fill="#78909C" fontSize="9">Rwanda</text>
              </svg>

              {/* Legend */}
              <div className="flex items-center gap-5 justify-center mt-4 text-xs text-[#78909C]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#1565C0] inline-block" />
                  Active
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#42A5F5]/40 inline-block" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Coverage
