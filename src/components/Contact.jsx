import { useState } from 'react';
import Reveal from './Reveal';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.56V6.78a4.86 4.86 0 0 1-1.06-.09z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const INITIAL = { name: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message || !isValidEmail(form.email)) {
      const btn = e.currentTarget.querySelector('button[type="submit"]');
      btn.style.animation = 'shake 0.4s var(--ease-in-out)';
      setTimeout(() => { btn.style.animation = ''; }, 450);
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => { setStatus('idle'); setForm(INITIAL); }, 3000);
    }, 1200);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">

          {/* Left — Info */}
          <Reveal direction="left">
            <p className="section-eyebrow">Let's Create Together</p>
            <h2 className="contact-title">Start a <em>Conversation</em></h2>
            <p className="contact-desc">
              Whether you have an event coming up, a brand story to tell, or just want to explore a
              creative collaboration — I'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:khaledmohsen175@gmail.com" className="contact-value">khaledmohsen175@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">WhatsApp</span>
                <a
                  href="https://wa.me/201010498629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value whatsapp-link"
                >
                  <WhatsAppIcon /> 01010498629
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Based in</span>
                <span className="contact-value">Cairo, Egypt</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/khaled__mohsen__?jplx=M2ljY3l3Y3huZWNj&utm_source=qr" className="social-link" aria-label="Instagram"><InstagramIcon /> Instagram</a>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal direction="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input className="form-input" type="text" id="name" name="name"
                    placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input className="form-input" type="email" id="email" name="email"
                    placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">Type of Project</label>
                <select className="form-input form-select" id="service" name="service"
                  value={form.service} onChange={handleChange}>
                  <option value="" disabled>Select a service</option>
                  <option>Wedding Photography</option>
                  <option>Corporate Event</option>
                  <option>Social Celebration</option>
                  <option>Cinematic Reel</option>
                  <option>Social Media Content</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea className="form-input form-textarea" id="message" name="message"
                  placeholder="Tell me about your vision, event date, location..."
                  value={form.message} onChange={handleChange} required />
              </div>

              <button
                type="submit"
                className={`btn btn--primary btn--full${status === 'sent' ? ' btn-sent' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent ✓'}
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
