import React, { useState } from 'react'
import './ClinicSection.css'

export default function ClinicSection() {
  const [open, setOpen] = useState(false)
  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']

  return (
    <section className="clinic">
      <div className="container">
        <div className="clinic__card">
          <div className="clinic__text">
            <h2 className="clinic__title">
              Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
            </h2>
          </div>
          <div className="clinic__right">
            <div className="clinic__logo-box">
              <span className="clinic__logo-text">clove<span className="clinic__logo-smile">:)</span></span>
              <span className="clinic__logo-sub">DENTAL</span>
            </div>
            <div className="clinic__find-wrap">
              <button className="clinic__find-btn" onClick={() => setOpen(!open)}>
                Find Clinic
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: '0.2s' }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open && (
                <div className="clinic__dropdown">
                  {cities.map(city => (
                    <button key={city} className="clinic__city" onClick={() => setOpen(false)}>
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
