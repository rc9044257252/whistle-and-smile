import React, { useState } from 'react'
import './HeroSection.css'

export default function HeroSection() {
  const [teethGap, setTeethGap] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="hero">
      <div className="hero__top">
        <div className="container hero__top-inner">
          <div className="hero__text">
            <h1 className="hero__title">Invisible Aligners for a dream smile</h1>
            <p className="hero__sub">
              Book a Scan and avail a free<br />
              Orthodontist Consult <span className="hero__sub-purple">worth ₹1500</span>
            </p>
          </div>
          <div className="hero__img-wrap">
            <img
              src="https://picsum.photos/seed/smile-woman/480/360"
              alt="Happy smile woman"
              className="hero__img"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="hero__form-section">
        <div className="container">
          <h2 className="hero__form-title">Do you have Teeth Gaps or Crooked Teeth?</h2>
          <div className="hero__radio-row">
            <label className="hero__radio-label">
              <input
                type="radio"
                name="teethgap"
                value="yes"
                checked={teethGap === 'yes'}
                onChange={() => setTeethGap('yes')}
              />
              <span className="hero__radio-circle"></span>
              Yes
            </label>
            <label className="hero__radio-label">
              <input
                type="radio"
                name="teethgap"
                value="no"
                checked={teethGap === 'no'}
                onChange={() => setTeethGap('no')}
              />
              <span className="hero__radio-circle"></span>
              No
            </label>
          </div>

          <form className="hero__form" onSubmit={handleSubmit}>
            <div className="hero__field">
              <label className="hero__field-label">Full Name*</label>
              <input
                type="text"
                className="hero__input"
                placeholder="Ajay Kumar"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="hero__field">
              <label className="hero__field-label">Mobile number*</label>
              <div className="hero__phone-wrap">
                <span className="hero__phone-prefix">+91</span>
                <input
                  type="tel"
                  className="hero__input hero__input--phone"
                  placeholder="Mobile number*"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  maxLength={10}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`hero__submit-btn ${submitted ? 'hero__submit-btn--done' : ''}`}
            >
              {submitted ? '✓ Booked!' : 'Book a Free Scan'}
            </button>
          </form>

          <label className="hero__consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
            />
            <span>I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.</span>
          </label>
        </div>
      </div>
    </section>
  )
}
