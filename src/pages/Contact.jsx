import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { contact } from '../data/content'

// ── Contact message form ─────────────────────────────────────────────────────
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
    >
      <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Message Sent!</h3>
      <p className="text-[#37474F]">Thanks for reaching out. We'll get back to you shortly.</p>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit(() => setSubmitted(true))} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#37474F] text-sm font-medium block mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-[#37474F] text-sm font-medium block mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-[#37474F] text-sm font-medium block mb-1.5">Subject</label>
        <input
          {...register('subject')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] transition-colors"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="text-[#37474F] text-sm font-medium block mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] transition-colors resize-none"
          placeholder="Tell us about your logistics needs..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-[#1565C0] hover:bg-[#1976D2] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Send Message
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}

// ── Quote request form ───────────────────────────────────────────────────────
const inputClass =
  'w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#42A5F5] transition-colors'
const selectClass =
  'w-full bg-[#0d1f3c] border border-white/20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#42A5F5] transition-colors'
const labelClass = 'text-white/70 text-sm font-medium block mb-1.5'

const QuoteRequestForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-14 text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
          <p className="text-white/70">
            We've received your request. Expect a call within the hour.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(() => setSubmitted(true))}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
              <input {...register('fullName', { required: true })} className={inputClass} placeholder="John Doe" />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">Required</p>}
            </div>
            <div>
              <label className={labelClass}>Company Name</label>
              <input {...register('companyName')} className={inputClass} placeholder="Acme Corp (optional)" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Phone <span className="text-red-400">*</span></label>
              <input {...register('phone', { required: true })} className={inputClass} placeholder="+254 700 000 000" />
              {errors.phone && <p className="text-red-400 text-xs mt-1">Required</p>}
            </div>
            <div>
              <label className={labelClass}>Email <span className="text-red-400">*</span></label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                className={inputClass}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">Valid email required</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Cargo Type</label>
              <select {...register('cargoType')} className={selectClass}>
                <option value="">Select type</option>
                <option value="general">General Freight</option>
                <option value="heavy">Heavy Equipment</option>
                <option value="fragile">Fragile</option>
                <option value="perishable">Perishable</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Estimated Weight</label>
              <select {...register('weight')} className={selectClass}>
                <option value="">Select range</option>
                <option value="<1T">Less than 1 ton</option>
                <option value="1-3T">1 – 3 tons</option>
                <option value="3-8T">3 – 8 tons</option>
                <option value="8T+">8+ tons</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Pickup Location <span className="text-red-400">*</span></label>
              <input {...register('pickup', { required: true })} className={inputClass} placeholder="e.g. Industrial Area, Nairobi" />
              {errors.pickup && <p className="text-red-400 text-xs mt-1">Required</p>}
            </div>
            <div>
              <label className={labelClass}>Delivery Location <span className="text-red-400">*</span></label>
              <input {...register('delivery', { required: true })} className={inputClass} placeholder="e.g. Mombasa Port" />
              {errors.delivery && <p className="text-red-400 text-xs mt-1">Required</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Preferred Date</label>
            <input type="date" {...register('date')} className={`${inputClass} [color-scheme:dark]`} />
          </div>

          <div>
            <label className={labelClass}>Additional Notes</label>
            <textarea
              {...register('notes')}
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Anything else we should know..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1565C0] hover:bg-[#1976D2] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Request
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us — SwiftHaul Logistics</title>
      <meta
        name="description"
        content="Get in touch with SwiftHaul Logistics or submit a quote request for your freight needs."
      />
    </Helmet>

    <Navbar />
    <PageHeader
      label="Contact Us"
      title="Get in Touch"
      subtitle="We're ready to move your cargo."
    />

    {/* Contact info + message form */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Contact Information</h2>
            <div className="space-y-4">
              {[
                { Icon: Phone, label: 'Phone', value: contact.phone },
                { Icon: Mail, label: 'Email', value: contact.email },
                { Icon: MapPin, label: 'Address', value: contact.address },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-[#E3F2FD] rounded-xl">
                  <div className="bg-[#1565C0] rounded-lg p-2.5 flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#78909C] tracking-wider">{label}</p>
                    <p className="text-[#0D1B2A] font-medium mt-0.5 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* Quote request form */}
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#42A5F5] text-sm font-semibold uppercase tracking-wider">
            Get a Quote
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
            Ready to Move Your Cargo?
          </h2>
          <p className="text-white/60 text-lg">
            Tell us what you need and we'll get back to you within the hour.
          </p>
        </motion.div>
        <QuoteRequestForm />
      </div>
    </section>

    <Footer />
  </>
)

export default Contact
