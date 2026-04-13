import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Send } from 'lucide-react'

const inputClass =
  'w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#42A5F5] transition-colors'

const selectClass =
  'w-full bg-[#0d1f3c] border border-white/20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#42A5F5] transition-colors'

const labelClass = 'text-white/70 text-sm font-medium block mb-1.5'

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // In production, send to backend / email service
    console.log('Quote request submitted:', data)
    setSubmitted(true)
  }

  return (
    <section id="quote" className="py-24 bg-[#0A1628]">
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

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
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
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Company Name</label>
                  <input
                    {...register('companyName')}
                    className={inputClass}
                    placeholder="Acme Corp (optional)"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    className={inputClass}
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 3 — Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Cargo Type</label>
                  <select {...register('cargoType')} className={selectClass}>
                    <option value="">Select cargo type</option>
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
                    <option value="">Select weight range</option>
                    <option value="<1T">Less than 1 ton</option>
                    <option value="1-3T">1 – 3 tons</option>
                    <option value="3-8T">3 – 8 tons</option>
                    <option value="8T+">8+ tons</option>
                  </select>
                </div>
              </div>

              {/* Row 4 — Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Pickup Location <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('pickup', { required: 'Pickup location is required' })}
                    className={inputClass}
                    placeholder="e.g. Industrial Area, Nairobi"
                  />
                  {errors.pickup && (
                    <p className="text-red-400 text-xs mt-1">{errors.pickup.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>
                    Delivery Location <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register('delivery', { required: 'Delivery location is required' })}
                    className={inputClass}
                    placeholder="e.g. Mombasa Port"
                  />
                  {errors.delivery && (
                    <p className="text-red-400 text-xs mt-1">{errors.delivery.message}</p>
                  )}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className={labelClass}>Preferred Date</label>
                <input
                  type="date"
                  {...register('date')}
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </div>

              {/* Notes */}
              <div>
                <label className={labelClass}>Additional Notes</label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Anything else we should know about your cargo..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1565C0] hover:bg-[#1976D2] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                Submit Request
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default QuoteForm
