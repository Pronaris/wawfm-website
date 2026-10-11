import { useState } from 'react';
import { Link } from 'react-router-dom';

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;
const services = ['Pre-employment medicals', 'Drug and alcohol testing', 'Hearing tests', 'Lung function tests', 'Workplace vaccinations'];
const empty = { name: '', company: '', location: '', email: '', phone: '', room: 'Yes, a private consult room', services: [], message: '', consent: false, website: '' };

export default function PartnerForm() {
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const toggle = (s) => setF({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] });

  function validate() {
    const e = {};
    if (!f.name.trim()) e.name = 'Enter your name.';
    if (!f.company.trim()) e.company = 'Enter the pharmacy’s name.';
    if (!f.location.trim()) e.location = 'Enter the suburb.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter an email address we can reply to.';
    if (f.phone && !/^[\d\s()+-]{8,}$/.test(f.phone)) e.phone = 'Enter a phone number with at least 8 digits, or leave it blank.';
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
      if (!ENDPOINT) throw new Error('No endpoint');
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'partner', name: f.name, company: f.company, email: f.email, phone: f.phone, location: f.location,
          candidates: '', timing: '', services: f.services,
          message: `Consult room: ${f.room}.${f.message ? '\n' + f.message : ''}`,
          consent: f.consent, source: 'wawfm.com.au', page: window.location.pathname, submittedAt: new Date().toISOString(),
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
        <h3>Thanks, we’ve got it</h3>
        <p>Our network lead will call you within two business days to book a 20-minute conversation. Nothing is binding at this stage.</p>
      </div>
    );
  }
  const err = (k) => errors[k] && <p className="field-error" id={`p-${k}-err`}>{errors[k]}</p>;
  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `p-${k}-err` : undefined });

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <div className="row2">
        <div className="field"><label htmlFor="p-name">Your name</label><input id="p-name" value={f.name} onChange={set('name')} autoComplete="name" {...aria('name')} />{err('name')}</div>
        <div className="field"><label htmlFor="p-company">Pharmacy name</label><input id="p-company" value={f.company} onChange={set('company')} autoComplete="organization" {...aria('company')} />{err('company')}</div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="p-email">Email</label><input id="p-email" type="email" value={f.email} onChange={set('email')} autoComplete="email" {...aria('email')} />{err('email')}</div>
        <div className="field"><label htmlFor="p-phone">Phone <span className="opt">(optional)</span></label><input id="p-phone" type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" {...aria('phone')} />{err('phone')}</div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="p-loc">Suburb</label><input id="p-loc" value={f.location} onChange={set('location')} {...aria('location')} />{err('location')}</div>
        <div className="field">
          <label htmlFor="p-room">Consult room</label>
          <select id="p-room" value={f.room} onChange={set('room')}>
            <option>Yes, a private consult room</option>
            <option>Shared with vaccinations or other services</option>
            <option>Not yet, but planned</option>
          </select>
        </div>
      </div>
      <fieldset className="field">
        <legend>Which services interest you?</legend>
        <div className="checks">
          {services.map((s) => <label key={s} className="check"><input type="checkbox" checked={f.services.includes(s)} onChange={() => toggle(s)} />{s}</label>)}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="p-msg">Anything we should know <span className="opt">(staffing, local employers, hours)</span></label>
        <textarea id="p-msg" rows="3" value={f.message} onChange={set('message')} />
      </div>
      <div className="hp" aria-hidden="true"><label htmlFor="p-website">Website</label><input id="p-website" tabIndex="-1" autoComplete="off" value={f.website} onChange={set('website')} /></div>
      <label className="check consent">
        <input type="checkbox" checked={f.consent} onChange={set('consent')} {...aria('consent')} />
        <span>WA WorkFit Medical may contact me about the partner pilot, as set out in the <Link to="/privacy">privacy policy</Link>.</span>
      </label>
      {err('consent')}
      {status === 'failed' && <p className="form-fail" role="alert">Your details didn’t reach us. Try again, or email hello@wawfm.com.au.</p>}
      <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Register interest'}</button>
    </form>
  );
}
