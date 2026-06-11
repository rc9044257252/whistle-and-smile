import React, { useState } from 'react'
import './HowItWorks.css'

const steps = [
  {
    num: '1',
    title: 'Scan',
    desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.',
  },
  {
    num: '2',
    title: 'Plan',
    desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software',
  },
  {
    num: '3',
    title: 'Fabricate',
    desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology',
  },
  {
    num: '4',
    title: 'Wear',
    desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.',
  },
]

export default function HowItWorks() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="how">
      <div className="container">
        <div className="how__inner">
          <div className="how__left">
            <h2 className="how__title">Get your perfect smile in four simple steps</h2>
            <div className="how__steps">
              {steps.map((s) => (
                <div key={s.num} className="how__step">
                  <div className="how__step-num">{s.num}</div>
                  <div className="how__step-text">
                    <h3 className="how__step-title">{s.title}</h3>
                    <p className="how__step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="how__cta-btn">Book a Free Scan</button>
          </div>

          <div className="how__right">
            <div className="how__video-wrap" onClick={() => setPlaying(true)}>
              <img
                src="https://picsum.photos/seed/dentist-procedure/520/400"
                alt="How it works video"
                className="how__video-thumb"
              />
              {!playing && (
                <div className="how__play-btn">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
