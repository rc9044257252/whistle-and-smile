import React from 'react'
import './WhyWhistle.css'

const cards = [
  {
    img: 'https://picsum.photos/seed/aligner1/320/280',
    title: 'Advanced Aligners',
    desc: 'Crafted with cutting-edge 3D printing technology for a perfect fit.'
  },
  {
    img: 'https://picsum.photos/seed/doctor2/320/280',
    title: 'Expert Orthodontists',
    desc: 'Treated by certified orthodontists at 450+ clinics nationwide.'
  },
  {
    img: 'https://picsum.photos/seed/clinic3/320/280',
    title: '450+ Partner Clinics',
    desc: 'Convenient clinic locations across all major cities in India.'
  },
  {
    img: 'https://picsum.photos/seed/smile4/320/280',
    title: 'Comfortable Treatment',
    desc: 'Removable, invisible aligners designed for your lifestyle.'
  },
]

export default function WhyWhistle() {
  return (
    <section className="why">
      <div className="container">
        <h2 className="why__title">Why Whistle?</h2>
        <div className="why__grid">
          {cards.map((c, i) => (
            <div key={i} className="why__card">
              <div className="why__img-wrap">
                <img src={c.img} alt={c.title} className="why__img" loading="lazy" />
              </div>
              <div className="why__card-body">
                <h3 className="why__card-title">{c.title}</h3>
                <p className="why__card-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
