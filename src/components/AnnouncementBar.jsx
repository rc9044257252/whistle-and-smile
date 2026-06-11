import React from 'react'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  return (
    <div className="ann-bar">
      <p>
        Starting at <span className="ann-bar__striked">Rs 69,999</span>{' '}
        <strong>Rs 47,999.</strong> Hurry! Offer ends soon.
      </p>
    </div>
  )
}
