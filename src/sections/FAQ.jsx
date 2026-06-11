import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What are Aligners?',
    a: 'Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!'
  },
  {
    q: 'How do Aligners work?',
    a: 'Whistle aligners, constructed from thin plastic shells, gently guide your teeth into position. In contrast to conventional metal braces, these invisible aligners are clear, discreet, and less bothersome. Remarkable results can be achieved in as few as six weeks, all while providing the flexibility to remove the aligners whenever needed. With the guidance of an orthodontist, Whistle aligners can work their magic, transforming your smile into a more beautiful one!'
  },
  {
    q: 'Can any dentist do irregular teeth treatment?',
    a: 'An Orthodontist is a dental specialist who prevents, diagnoses and treats facial irregularities. Orthodontic treatments aim to improve the way the teeth and jaws function, as well as the person\'s smile or appearance. They straighten crooked or misaligned teeth, fix bad bites and make sure jaws are correctly aligned. For best results from your Invisible Aligners\' one must consult with an Orthodontist.'
  },
  {
    q: 'Are there any restriction on eating or drinking?',
    a: 'No restrictions as such. The "snapon/snapoff" feature makes Aligners comfortable and easy to use in all social situations.'
  },
  {
    q: 'How long does the treatment take?',
    a: 'Typically, it may take 6-12 months for correcting the \'social six (front teeth). For more complex cases such as crowded teeth, the treatment time could be 12-24 months or slightly longer. The best person to give advice on this your Orthodontist.'
  },
  {
    q: 'Is the treatment painful?',
    a: 'Whistle aligners are designed to be as comfortable as possible. You may feel slight pressure during the first few days of wearing a new set of aligners, but this is normal and indicates the aligners are working to move your teeth.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">
          <span className="faq__title-purple">Got Questions?</span>
          {'  '}We've got answers
        </h2>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon">
                  {openIndex === i
                    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  }
                </span>
              </button>
              {openIndex === i && (
                <div className="faq__answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
