import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../data.js';

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

const serviceOptions = [
  'Pre-employment medicals',
  'Drug and alcohol testing',
  'Hearing tests',
  'Lung function tests',
  'Health monitoring (silica, lead, mines)',
  'Respirator fit testing',
  'Workplace vaccinations',
];

const empty = {
  kind: 'employer',
  name: '',
  company: '',
  email: '',
  phone: '',
  location: 'On-site at our workplace',
  candidates: '',
  timing: '',
  services: [],
  message: '',
  consent: false,
  website: '', // honeypot
};

export default function EnquiryForm() {
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const toggle = (s) => setF({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] });

  function validate() {
    const e = {};
    if (!f.name.trim()) e.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter an email address we can reply to.';
    if (f.phone && !/^[\d\s()+-]{8,}$/.test(f.phone)) e.phone = 'Enter a phone number with at least 8 digits, or leave it blank.';
    if (f.kind === 'employer' && !f.company.trim()) e.company = 'Enter your business name.';
    if (!f.consent) e.consent = 'Tick the box so we can use these details to reply.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    if (f.website) { setStatus('sent'); return; }
    setStatus('sending');
    try {
      if (!ENDPOINT) throw new Error('No endpoint configured');
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...f,
          website: undefined,
          source: 'wawfm.com.au',
          page: window.location.pathname,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setF(empty);
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <h2>Request sent</h2>
        <p>We’ll reply within one business hour (Monday to Friday, 8am to 5pm). If it’s after hours, expect us first thing next business day.</p>
        <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another request</button>
      </div>
    );
  }

  const err = (k) => errors[k] && <p className="field-error" id={`${k}-err`}>{errors[k]}</p>;

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <fieldset className="kind">
        <legend>I am</legend>
        <label className={f.kind === 'employer' ? 'seg on' : 'seg'}>
          <input type="radio" name="kind" value="employer" checked={f.kind === 'employer'} onChange={set('kind')} />
          An employer or recruiter
        </label>
        <label className={f.kind === 'candidate' ? 'seg on' : 'seg'}>
          <input type="radio" name="kind" value="candidate" checked={f.kind === 'candidate'} onChange={set('kind')} />
          A candidate booking my medical
        </label>
      </fieldset>

      <div className="row2">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor="company">{f.kind === 'employer' ? 'Business name' : 'Employer you’re joining'}</label>
          <input id="company" value={f.company} onChange={set('company')} autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-err' : undefined} />
          {err('company')}
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={f.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
          {err('email')}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone <span className="opt">(optional)</span></label>
          <input id="phone" type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
          {err('phone')}
        </div>
      </div>

      <fieldset className="field">
        <legend>What do you need?</legend>
        <div className="checks">
          {serviceOptions.map((s) => (
            <label key={s} className="check">
              <input type="checkbox" checked={f.services.includes(s)} onChange={() => toggle(s)} />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="row3">
        <div className="field">
          <label htmlFor="location">Where</label>
          <select id="location" value={f.location} onChange={set('location')}>
            <option>On-site at our workplace</option>
            <option>Myaree consult room</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="candidates">How many people</label>
          <input id="candidates" inputMode="numeric" value={f.candidates} onChange={set('candidates')} placeholder="e.g. 12" />
        </div>
        <div className="field">
          <label htmlFor="timing">When</label>
          <input id="timing" value={f.timing} onChange={set('timing')} placeholder="e.g. week of 9 Feb, early starts" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Anything else <span className="opt">(roles, site, shift times)</span></label>
        <textarea id="message" rows="4" value={f.message} onChange={set('message')} />
        <p className="hint">Please don’t include health details here. We collect those privately at the assessment.</p>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex="-1" autoComplete="off" value={f.website} onChange={set('website')} />
      </div>

      <label className="check consent">
        <input type="checkbox" checked={f.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-err' : undefined} />
        <span>WA WorkFit Medical may use these details to reply to my request, as set out in the <Link to="/privacy">privacy policy</Link>.</span>
      </label>
      {err('consent')}

      {status === 'failed' && (
        <p className="form-fail" role="alert">
          Your request didn’t reach us. Try again, or email it to <a href={`mailto:${contact.bookingsEmail}`}>{contact.bookingsEmail}</a>.
        </p>
      )}

      <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending request…' : 'Send request'}
      </button>
    </form>
  );
}
