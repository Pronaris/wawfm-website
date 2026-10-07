import { Link } from 'react-router-dom';

const steps = [
  { t: 'Open an account', d: 'Tell us your business, who should receive reports, and how you’d like to pay: card for occasional bookings, or 30-day terms for regular volume.' },
  { t: 'Describe each role', d: 'Our Position Assessment Form captures the tasks, the heaviest lift, hazards, PPE and any safety-critical work. We match the tests to the role, so no candidate is over-tested.' },
  { t: 'Book people in', d: 'Book through us or your portal. We answer within an hour and offer an appointment within two business days, at your site or at Myaree.' },
  { t: 'Receive the report', d: 'Reports for clear results arrive the same day, and doctor-reviewed reports within one business day. No-shows are reported by 9am the next day.' },
];

const fits = [
  { h: 'Labour hire and recruiters', p: 'Same-day reports, early and Saturday slots, and one fixed price per role package.' },
  { h: 'Kwinana industry and shutdown contractors', p: 'Medical days at your gate, random drug and alcohol testing rounds, and respirator fit testing.' },
  { h: 'Defence and shipbuilding supply chain', p: 'Hearing baselines and comprehensive medicals, plus doctor-signed health monitoring for welding fume and isocyanates.' },
  { h: 'Health, aged care and NDIS providers', p: 'Immunisation compliance packs covering hepatitis B, MMR, varicella, dTpa and flu, with vaccination history checks.' },
  { h: 'Councils and government', p: 'Published prices, written service levels and a capability statement for panels and tenders.' },
];

export default function Employers() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>For employers</h1>
          <p className="lede">Set up once, then book a candidate in a minute. Each role gets the same tests and price every time.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Getting started</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>Who we work with</h2>
          <dl className="fit-list">
            {fits.map((f) => (
              <div key={f.h}><dt>{f.h}</dt><dd>{f.p}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Your obligations, handled</h2>
            <ul className="ticks">
              <li>Assessments tied to the inherent requirements of the role, to reduce discrimination risk</li>
              <li>Drug and alcohol testing to AS/NZS 4308:2023, with chain of custody and laboratory confirmation</li>
              <li>Hearing tests on schedule under the WHS (Mines) Regulations, regulation 58</li>
              <li>Health monitoring signed by a doctor, with regulator reporting</li>
              <li>Health information held in Australia under the Privacy Act</li>
            </ul>
          </div>
          <div className="aside-box">
            <h3>Ready to set up an account?</h3>
            <p>Send us the roles and the volume you expect. We’ll come back with role packages and a quote the same day.</p>
            <Link to="/book" className="btn btn-primary">Open an employer account</Link>
          </div>
        </div>
      </section>
    </>
  );
}
