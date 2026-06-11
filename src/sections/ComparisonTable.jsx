import React, { useState } from 'react'
import './ComparisonTable.css'

const rows = [
  {
    feature: 'Easy to complex cases',
    whistle: { type: 'text', value: 'Yes, mild to complex' },
    others:  { type: 'text', value: 'No, only mild to moderate' },
    detail: 'Whistle handles mild to complex orthodontic cases with expert orthodontist supervision at every stage.'
  },
  {
    feature: 'Clear-cut Pricing',
    whistle: { type: 'check' },
    others:  { type: 'cross' },
    detail: 'Whistle provides fully transparent pricing with no hidden fees or surprise charges.'
  },
  {
    feature: 'Aligner Change',
    whistle: { type: 'text', value: 'Every 10 days' },
    others:  { type: 'text', value: 'Every 2 weeks' },
    detail: 'Changing aligners every 10 days accelerates treatment and gives more precise tooth movement.'
  },
  {
    feature: 'Clinical Partnership',
    whistle: { type: 'check' },
    others:  { type: 'cross' },
    detail: 'Whistle partners with 450+ Clove Dental clinics for in-person clinical supervision throughout treatment.'
  },
  {
    feature: 'Movement Between Cities',
    whistle: { type: 'check' },
    others:  { type: 'cross' },
    detail: 'You can continue treatment at any Whistle partner clinic if you move to a different city.'
  },
  {
    feature: 'Complimentary Teeth Scaling',
    whistle: { type: 'check' },
    others:  { type: 'cross' },
    detail: 'Whistle provides complimentary teeth scaling as part of your treatment package.'
  },
]

function CheckIcon() {
  return (
    <span className="ct__check">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </span>
  )
}
function CrossIcon() {
  return (
    <span className="ct__cross">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
  )
}

export default function ComparisonTable() {
  const [openRow, setOpenRow] = useState(null)

  const toggle = (i) => setOpenRow(openRow === i ? null : i)

  return (
    <section className="ct">
      <div className="container">
        <h2 className="ct__title">What sets Whistle apart?</h2>

        <div className="ct__table">
          {/* Header */}
          <div className="ct__header">
            <div className="ct__col ct__col--feature">Features</div>
            <div className="ct__col ct__col--whistle">
              <div className="ct__brand-logo">
                <span style={{ color: '#7C3AED', fontWeight: 800, fontSize: 18 }}>whistle</span>
                <span style={{ fontSize: 9, letterSpacing: 2, color: '#7C3AED', display: 'block' }}>AND SMILE</span>
              </div>
            </div>
            <div className="ct__col ct__col--others">Other Brands</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="ct__row-wrap">
              <div
                className={`ct__row ${openRow === i ? 'ct__row--open' : ''}`}
                onClick={() => toggle(i)}
              >
                <div className="ct__col ct__col--feature">
                  <span className="ct__feature-name">{row.feature}</span>
                  <svg
                    className={`ct__chevron ${openRow === i ? 'ct__chevron--up' : ''}`}
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                <div className="ct__col ct__col--whistle ct__col--bg">
                  {row.whistle.type === 'check' && <CheckIcon />}
                  {row.whistle.type === 'cross' && <CrossIcon />}
                  {row.whistle.type === 'text' && <span className="ct__val">{row.whistle.value}</span>}
                </div>
                <div className="ct__col ct__col--others">
                  {row.others.type === 'check' && <CheckIcon />}
                  {row.others.type === 'cross' && <CrossIcon />}
                  {row.others.type === 'text' && <span className="ct__val">{row.others.value}</span>}
                </div>
              </div>
              {openRow === i && (
                <div className="ct__detail">{row.detail}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
