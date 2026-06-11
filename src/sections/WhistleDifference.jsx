import React from 'react'
import './WhistleDifference.css'

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#EEF3FF"/>
        <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
        <path d="M20 24l2.5 2.5L28 21" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="10" width="12" height="6" rx="3" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Next-Gen',
    desc: 'Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#EEF3FF"/>
        <circle cx="24" cy="24" r="10" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
        <path d="M24 18v6l4 2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 36l-3 3M34 36l3 3" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Hassle-Free',
    desc: 'Predictable, comfortable & lifestyle-friendly for an easy smile transformation.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#EEF3FF"/>
        <path d="M12 36V20l12-8 12 8v16H12z" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
        <path d="M20 36v-8h8v8" stroke="#7C3AED" strokeWidth="1.5"/>
        <path d="M16 26h2M30 26h2" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden costs. Clear pricing from the very beginning of your treatment.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#EEF3FF"/>
        <path d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M30 10l4 4-8 8" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Doctor Supervised',
    desc: 'Treated by certified orthodontists at Clove Dental clinics across India.',
  },
]

export default function WhistleDifference() {
  return (
    <section className="diff">
      <div className="diff__inner">
        <div className="diff__left">
          <h2 className="diff__title">The Whistle Difference</h2>
          <div className="diff__features">
            {features.map((f, i) => (
              <div key={i} className="diff__feature">
                <div className="diff__feature-icon">{f.icon}</div>
                <div className="diff__feature-text">
                  <h3 className="diff__feature-title">{f.title}</h3>
                  <p className="diff__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="diff__right">
          <img
            src="https://picsum.photos/seed/3dprinter/600/700"
            alt="3D Printing Technology"
            className="diff__img"
          />
        </div>
      </div>
    </section>
  )
}
