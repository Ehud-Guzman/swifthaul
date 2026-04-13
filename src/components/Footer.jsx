import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ChevronUp, ArrowRight } from 'lucide-react'
import { contact } from '../data/content'

const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = () => (
  <footer className="bg-gradient-to-br from-[#0A1628] via-[#0D1B2A] to-[#0A1628] text-white relative">


    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1 — Logo + tagline + socials (wider) */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-gradient-to-br from-[#1565C0] to-[#42A5F5] rounded-xl p-2 shadow-lg shadow-[#1565C0]/20">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight">
              Swift<span className="text-[#42A5F5]">Haul</span>
            </span>
          </div>
          <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
            Moving Cargo. Building Trust.
            <br />
            Your reliable logistics partner across East Africa — on time, every time.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              { Icon: Facebook, label: 'Facebook', href: '#' },
              { Icon: Instagram, label: 'Instagram', href: '#' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1565C0] border border-white/10 hover:border-[#1565C0] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#42A5F5] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', action: scrollToTop },
              { label: 'Services', action: () => scrollTo('#services') },
              { label: 'Fleet', action: () => scrollTo('#fleet') },
              { label: 'How It Works', action: () => scrollTo('#how-it-works') },
            ].map((link) => (
              <li key={link.label}>
                <button
                  onClick={link.action}
                  className="text-white/55 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-3 transition-all duration-200 overflow-hidden">
                    <ArrowRight className="w-3 h-3 text-[#42A5F5]" />
                  </span>
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="text-white/55 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
              >
                <span className="w-0 group-hover:w-3 transition-all duration-200 overflow-hidden">
                  <ArrowRight className="w-3 h-3 text-[#42A5F5]" />
                </span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#42A5F5] mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              'Freight Transport',
              'Last-Mile Delivery',
              'Warehousing',
              'Express Logistics',
            ].map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo('#services')}
                  className="text-white/55 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-3 transition-all duration-200 overflow-hidden">
                    <ArrowRight className="w-3 h-3 text-[#42A5F5]" />
                  </span>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#42A5F5] mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/55 text-sm group hover:text-white/80 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#1565C0]/20">
                <Phone className="w-4 h-4 text-[#42A5F5]" />
              </div>
              {contact.phone}
            </li>
            <li className="flex items-center gap-3 text-white/55 text-sm group hover:text-white/80 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#1565C0]/20">
                <Mail className="w-4 h-4 text-[#42A5F5]" />
              </div>
              {contact.email}
            </li>
            <li className="flex items-start gap-3 text-white/55 text-sm group hover:text-white/80 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#1565C0]/20 flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#42A5F5]" />
              </div>
              <span className="leading-relaxed">{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/35 text-sm">
          © {new Date().getFullYear()} SwiftHaul Logistics. All rights reserved.
        </p>
        <p className="text-white/35 text-sm flex items-center gap-1.5">
          Built by{' '}
          <a
            href="https://glimmerink.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#42A5F5] font-medium hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
          >
            GlimmerInk Creations
          </a>
        </p>
      </div>
    </div>

    {/* Back to top button */}
    <button
      onClick={scrollToTop}
      className="absolute bottom-20 right-6 lg:bottom-24 lg:right-10 w-10 h-10 bg-[#1565C0] hover:bg-[#1976D2] rounded-full flex items-center justify-center shadow-lg shadow-[#1565C0]/30 transition-all duration-200 hover:scale-110 group"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
    </button>
  </footer>
)

export default Footer