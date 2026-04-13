import React, { useState, useEffect, useRef } from 'react'
import { stats } from '../data/content'

const CountUp = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true

    const duration = 1800
    const fps = 60
    const totalFrames = Math.round((duration / 1000) * fps)
    let frame = 0

    const tick = () => {
      frame++
      // ease-out curve
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3)
      const current = Math.round(progress * target)
      setCount(current)
      if (frame < totalFrames) requestAnimationFrame(tick)
      else setCount(target)
    }

    requestAnimationFrame(tick)
  }, [isVisible, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#0A1628] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-8 px-4 ${
                index < stats.length - 1
                  ? 'lg:border-r lg:border-white/10'
                  : ''
              } ${index < 2 ? 'border-b lg:border-b-0 border-white/10' : ''}`}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-[#78909C] text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
