import React, { useRef } from 'react'
import './HappySmilers.css'

const smilers = [
  { name: 'Priya S.', seed: 'smiler1', quote: 'My smile transformation was incredible. The aligners were so comfortable I forgot I was wearing them!' },
  { name: 'Anjali M.', seed: 'smiler2', quote: 'The Whistle team was amazing throughout my treatment. Highly recommend to everyone!' },
  { name: 'Kavitha R.', seed: 'smiler3', quote: 'I achieved my dream smile in just 8 months. The orthodontists at Clove were exceptional.' },
  { name: 'Rahul K.', seed: 'smiler4', quote: 'Best decision I ever made. No one even noticed I was wearing aligners until I showed them my new smile!' },
  { name: 'Sneha T.', seed: 'smiler5', quote: 'The process was smooth from start to finish. The free scan got me hooked from day one.' },
]

export default function HappySmilers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="smilers">
      <div className="container">
        <h2 className="smilers__title">Happy Smilers!</h2>
        <div className="smilers__scroll-wrap">
          <button className="smilers__arrow smilers__arrow--left" onClick={() => scroll(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="smilers__track" ref={scrollRef}>
            {smilers.map((s, i) => (
              <div key={i} className={`smilers__card ${i === 2 ? 'smilers__card--center' : ''}`}>
                <div className="smilers__card-header">
                  <div className="smilers__whistle-logo">
                    <span style={{ color: 'white', fontWeight: 800, fontSize: 14 }}>whistle</span>
                    <span style={{ fontSize: 7, letterSpacing: 2, color: 'rgba(255,255,255,0.8)', display: 'block' }}>AND SMILE</span>
                  </div>
                </div>
                <div className="smilers__img-wrap">
                  <img
                    src={`https://picsum.photos/seed/${s.seed}/240/260`}
                    alt={s.name}
                    className="smilers__img"
                    loading="lazy"
                  />
                  <div className="smilers__quote-icon">❝❝</div>
                </div>
                <div className="smilers__card-bottom">
                  <p className="smilers__name">HAPPY MONIALS</p>
                  <p className="smilers__person">{s.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="smilers__arrow smilers__arrow--right" onClick={() => scroll(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
