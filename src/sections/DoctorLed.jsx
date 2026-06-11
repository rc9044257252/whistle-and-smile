import React from 'react'
import './DoctorLed.css'

export default function DoctorLed() {
  return (
    <section className="doctor">
      <div className="doctor__inner">
        <div className="doctor__left">
          <h2 className="doctor__title">We are Doctor-led, not direct-to-customers</h2>
          <p className="doctor__desc">
            We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an
            Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+
            clinics nationwide.
          </p>
          <button className="doctor__cta">Get a Callback</button>
        </div>
        <div className="doctor__right">
          <img
            src="https://picsum.photos/seed/female-doctor/640/480"
            alt="Doctor at clinic"
            className="doctor__img"
          />
        </div>
      </div>
    </section>
  )
}
