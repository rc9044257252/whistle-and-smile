import React from 'react'
import './StickyFooterCTA.css'

export default function StickyFooterCTA() {
  return (
    <div className="sticky-cta">
      <span className="sticky-cta__text">Ready for your perfect smile?</span>
      <div className="sticky-cta__btns">
        <button className="sticky-cta__btn sticky-cta__btn--fill">Book scan at Home</button>
        <button className="sticky-cta__btn sticky-cta__btn--outline">Book scan at Clinic</button>
      </div>
    </div>
  )
}
