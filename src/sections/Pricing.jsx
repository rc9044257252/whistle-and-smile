import React from 'react'
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container pricing__inner">
        <div className="pricing__left">
          <h2 className="pricing__title">Dream smiles achieved secretly</h2>
          <p className="pricing__desc">
            Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material.
            With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove
          </p>
          <p className="pricing__desc pricing__desc--mt">
            The pricing is different for every case. Cases with higher complexity requiring more aligners
            and additional time and effort from our dentists.
          </p>
        </div>

        <div className="pricing__card">
          <div className="pricing__card-top">
            <div>
              <h3 className="pricing__card-title">Whistle Aligners</h3>
              <p className="pricing__original">₹84,000</p>
              <p className="pricing__current">
                starting at <span className="pricing__price">₹47,999</span>
              </p>
              <p className="pricing__tax">inc. of all taxes</p>
              <div className="pricing__benefits">
                <div className="pricing__benefit">
                  <span className="pricing__tick">✓</span>
                  Offer valid for a limited time
                </div>
                <div className="pricing__benefit">
                  <span className="pricing__tick">✓</span>
                  Easy financing options
                </div>
              </div>
            </div>
            <div className="pricing__aligner-img">
              <img
                src="https://picsum.photos/seed/alignercase/160/160"
                alt="Whistle Aligner case"
                style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '50%', background: '#C8AAEE' }}
              />
            </div>
          </div>
          <button className="pricing__learn-btn">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
