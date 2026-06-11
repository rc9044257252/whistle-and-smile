import React, { useState, useEffect } from 'react'
import './Results.css'

const RESULTS_DATA = [
  { concern: 'Gaps', duration: '8 months', seed1: 'teeth-before1', seed2: 'teeth-after1' },
  { concern: 'Crooked Teeth', duration: '8 months', seed1: 'teeth-before2', seed2: 'teeth-after2' },
  { concern: 'Open Bite', duration: '8 months', seed1: 'teeth-before3', seed2: 'teeth-after3' },
  { concern: 'Protruding Teeth', duration: '8 months', seed1: 'teeth-before4', seed2: 'teeth-after4' },
]

function ResultCard({ item, loading }) {
  if (loading) {
    return (
      <div className="result-card">
        <div className="result-card__imgs">
          <div className="result-card__img-wrap skeleton-box"></div>
          <div className="result-card__img-wrap skeleton-box"></div>
        </div>
        <div className="result-card__info">
          <div className="skeleton-line" style={{ width: '60%' }}></div>
          <div className="skeleton-line" style={{ width: '80%' }}></div>
        </div>
      </div>
    )
  }
  return (
    <div className="result-card">
      <div className="result-card__imgs">
        <div className="result-card__img-wrap">
          <img
            src={`https://picsum.photos/seed/${item.seed1}/200/180`}
            alt="Before"
            className="result-card__img"
            loading="lazy"
          />
          <span className="result-card__label">Before</span>
        </div>
        <div className="result-card__img-wrap">
          <img
            src={`https://picsum.photos/seed/${item.seed2}/200/180`}
            alt="After"
            className="result-card__img"
            loading="lazy"
          />
          <span className="result-card__label">After</span>
        </div>
      </div>
      <div className="result-card__info">
        <div className="result-card__row">
          <span className="result-card__key">Concern</span>
          <span className="result-card__val">{item.concern}</span>
        </div>
        <div className="result-card__row result-card__row--border">
          <span className="result-card__key">Treatment Duration</span>
          <span className="result-card__val">{item.duration}</span>
        </div>
      </div>
    </div>
  )
}

export default function Results() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json() })
      .then(data => {
        const merged = RESULTS_DATA.map((item, i) => ({
          ...item,
          apiTitle: data[i]?.title || '',
        }))
        setPosts(merged)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load results. Showing default data.')
        setPosts(RESULTS_DATA)
        setLoading(false)
      })
  }, [])

  return (
    <section className="results">
      <div className="container">
        <h2 className="results__title">Results You'll Love</h2>
        {error && <p className="results__error">{error}</p>}
        <div className="results__grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <ResultCard key={i} loading={true} />)
            : posts.map((item, i) => <ResultCard key={i} item={item} loading={false} />)
          }
        </div>
      </div>
    </section>
  )
}
