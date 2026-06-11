import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Announcement bar repeated at top of footer */}
      <div className="footer__ann">
        Starting at <span className="footer__ann-strike">Rs 69,999</span>{' '}
        <strong>Rs 47,999.</strong> Hurry! Offer ends soon.
      </div>

      <div className="container footer__grid">
        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {['Home', 'Book a Free Scan', 'How it Works', 'Range of Aligners', 'Aligners vs Braces', 'FAQs'].map(l => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="footer__col">
          <h4 className="footer__col-title">Get in Touch Now!</h4>
          <div className="footer__contact">
            <a href="tel:011-6932-8350" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              011-6932-8350
            </a>
            <a href="mailto:support@whistle.in" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              support@whistle.in
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer__col">
          <h4 className="footer__col-title">Follow us on</h4>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="X / Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Privacy Policy</a></li>
            <li><a href="#" className="footer__link">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2024 Whistle and Smile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
