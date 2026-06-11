import React from 'react'
import './MarqueeBanner.css'

const items = [
  { bold: 'Free teeth scan', normal: 'worth ₹500' },
  { bold: null, normal: 'Our inaugural launch benefit' },
  { bold: 'Free orthodontic consultation', normal: 'worth ₹1500' },
  { bold: 'Free teeth scan', normal: 'worth ₹500' },
  { bold: null, normal: 'Our inaugural launch benefit' },
  { bold: 'Free orthodontic consultation', normal: 'worth ₹1500' },
  { bold: 'Free teeth scan', normal: 'worth ₹500' },
  { bold: null, normal: 'Our inaugural launch benefit' },
  { bold: 'Free orthodontic consultation', normal: 'worth ₹1500' },
]

export default function MarqueeBanner() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item.bold && <strong>{item.bold}</strong>}
            {item.normal && <span> {item.normal}</span>}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
