import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { medicals, tests, GST } from '../data.js';

const addOnIds = ['hearing', 'lung', 'uds', 'oral'];
const addOns = tests.filter((t) => addOnIds.includes(t.id));
const doctor = tests.find((t) => t.id === 'doctor');
const callout = tests.find((t) => t.id === 'callout');
const money = (n) => n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 0, maximumFractionDigits: 0 });

// Add-ons already inside a package are hidden for that row, so nobody pays twice.
const included = {
  digital: [], essential: [], standard: ['uds', 'oral'], comprehensive: ['uds', 'oral', 'hearing', 'lung'], statutory: ['lung'],
};

let nextId = 2;
const blank = () => ({ id: nextId++, role: '', pkg: 'standard', count: 5, addOns: [] });

export default function Quote() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([{ id: 1, role: 'Labourer', pkg: 'standard', count: 8, addOns: ['hearing'] }]);
  const [where, setWhere] = useState('onsite');
  const [doctorAll, setDoctorAll] = useState(false);

  const update = (id, patch) => setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  const toggleAdd = (id, a) => setRows((rs) => rs.map((r) => (r.id === id
    ? { ...r, addOns: r.addOns.includes(a) ? r.addOns.filter((x) => x !== a) : [...r.addOns, a] } : r)));

  const calc = useMemo(() => {
    const lines = rows.map((r) => {
      const pkg = medicals.find((m) => m.id === r.pkg);
      const n = Math.max(0, Math.floor(Number(r.count) || 0));
      const adds = r.addOns.filter((a) => !included[r.pkg].includes(a)).map((a) => addOns.find((x) => x.id === a));
      const each = pkg.price + adds.reduce((s, a) => s + a.price, 0) + (doctorAll && pkg.signedBy !== 'Doctor' ? doctor.price : 0);
      return { ...r, n, pkg, adds, each, total: each * n };
    });
    const people = lines.reduce((s, l) => s + l.n, 0);
    const callOut = where === 'onsite' && people > 0 && people < 15 ? callout.price : 0;
    const ex = lines.reduce((s, l) => s + l.total, 0) + callOut;
    const gst = Math.round(ex * GST);
    return { lines, people, callOut, ex, gst, inc: ex + gst };
  }, [rows, where, doctorAll]);

  function send() {
    const summary = calc.lines.filter((l) => l.n > 0).map((l) =>
      `${l.n} × ${l.role || 'Unnamed role'}: ${l.pkg.name}${l.adds.length ? ' + ' + l.adds.map((a) => a.name).join(', ') : ''} (${money(l.each)} each ex-GST)`);
    navigate('/book', {
      state: {
        quote: {
          candidates: String(calc.people),
          location: where === 'onsite' ? 'On-site at our workplace' : 'Myaree consult room',
          message: `Estimate from the website quote tool:\n${summary.join('\n')}${doctorAll ? '\nDoctor review on every report.' : ''}\nEstimated total ${money(calc.ex)} ex-GST (${money(calc.inc)} inc. GST).`,
          services: ['Pre-employment medicals', ...(calc.lines.some((l) => l.adds.some((a) => a.id === 'hearing')) || calc.lines.some((l) => l.pkg.id === 'comprehensive') ? ['Hearing tests'] : []),
            ...(calc.lines.some((l) => ['standard', 'comprehensive'].includes(l.pkg.id) || l.adds.some((a) => ['uds', 'oral'].includes(a.id))) ? ['Drug and alcohol testing'] : [])],
        },
      },
    });
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Quote estimator</h1>
          <p className="lede">Add each role, pick its package and how many people. You’ll see the total straight away, with GST, using our published prices.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap quote-grid">
          <div className="quote-builder">
            <fieldset className="kind">
              <legend>Where should we assess them?</legend>
              <label className={where === 'onsite' ? 'seg on' : 'seg'}>
                <input type="radio" name="where" checked={where === 'onsite'} onChange={() => setWhere('onsite')} />
                At our workplace
              </label>
              <label className={where === 'myaree' ? 'seg on' : 'seg'}>
                <input type="radio" name="where" checked={where === 'myaree'} onChange={() => setWhere('myaree')} />
                Myaree consult room
              </label>
            </fieldset>

            {rows.map((r, idx) => (
              <div className="q-row" key={r.id}>
                <div className="q-row-head">
                  <p className="q-row-num">Role {idx + 1}</p>
                  {rows.length > 1 && (
                    <button type="button" className="q-remove" onClick={() => setRows((rs) => rs.filter((x) => x.id !== r.id))} aria-label={`Remove role ${idx + 1}`}>Remove</button>
                  )}
                </div>
                <div className="q-fields">
                  <div className="field">
                    <label htmlFor={`role-${r.id}`}>Role title</label>
                    <input id={`role-${r.id}`} value={r.role} onChange={(e) => update(r.id, { role: e.target.value })} placeholder="e.g. Forklift operator" />
                  </div>
                  <div className="field">
                    <label htmlFor={`pkg-${r.id}`}>Package</label>
                    <select id={`pkg-${r.id}`} value={r.pkg} onChange={(e) => update(r.id, { pkg: e.target.value })}>
                      {medicals.map((m) => <option key={m.id} value={m.id}>{m.name} ({m.from ? 'from ' : ''}${m.price})</option>)}
                    </select>
                  </div>
                  <div className="field q-count">
                    <label htmlFor={`n-${r.id}`}>People</label>
                    <input id={`n-${r.id}`} inputMode="numeric" value={r.count} onChange={(e) => update(r.id, { count: e.target.value.replace(/\D/g, '').slice(0, 4) })} />
                  </div>
                </div>
                {addOns.some((a) => !included[r.pkg].includes(a.id)) && (
                  <fieldset className="q-adds">
                    <legend>Add tests</legend>
                    {addOns.filter((a) => !included[r.pkg].includes(a.id)).map((a) => (
                      <label key={a.id} className="check">
                        <input type="checkbox" checked={r.addOns.includes(a.id)} onChange={() => toggleAdd(r.id, a.id)} />
                        {a.name} <span className="opt">+${a.price}</span>
                      </label>
                    ))}
                  </fieldset>
                )}
              </div>
            ))}

            <button type="button" className="btn btn-ghost" onClick={() => setRows((rs) => [...rs, blank()])}>Add another role</button>

            <label className="check q-doctor">
              <input type="checkbox" checked={doctorAll} onChange={(e) => setDoctorAll(e.target.checked)} />
              <span>Doctor review on every report <span className="opt">(+${doctor.price} each). Optional. Without it, only flagged results go to our doctor, at ${doctor.price} each.</span></span>
            </label>
          </div>

          <aside className="quote-sum">
            <h2>Your estimate</h2>
            <ul className="q-lines">
              {calc.lines.filter((l) => l.n > 0).map((l) => (
                <li key={l.id}>
                  <span>{l.n} × {l.role || l.pkg.name}</span>
                  <span>{money(l.total)}</span>
                </li>
              ))}
              {calc.callOut > 0 && (
                <li><span>On-site call-out <small>(waived from 15 people)</small></span><span>{money(calc.callOut)}</span></li>
              )}
            </ul>
            <dl className="q-totals" aria-live="polite" aria-atomic="true">
              <div><dt>Total ex-GST</dt><dd>{money(calc.ex)}</dd></div>
              <div><dt>GST</dt><dd>{money(calc.gst)}</dd></div>
              <div className="q-grand"><dt>Total inc. GST</dt><dd>{money(calc.inc)}</dd></div>
              {calc.people > 0 && <div><dt>Average per person</dt><dd>{money(calc.ex / calc.people)} ex-GST</dd></div>}
            </dl>
            <button type="button" className="btn btn-primary btn-lg q-send" onClick={send} disabled={calc.people === 0}>Send this as a quote request</button>
            <p className="small">
              An estimate, not an invoice. Possible extras: if a result is flagged, doctor review is ${doctor.price} ex-GST (about 1 in 5 medicals in our planning). Laboratory confirmation of a non-negative drug screen is ${tests.find((t) => t.id === 'lab' || t.name.startsWith('Laboratory')).price} per specimen if needed.
              Health monitoring is priced on the hazard. More than 100 assessments a year? <Link to="/book">Ask about volume pricing.</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
