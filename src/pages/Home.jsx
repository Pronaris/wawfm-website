import { Link } from 'react-router-dom';
import ReportCard from '../components/ReportCard.jsx';
import { medicals, serviceLevels, vaccines, inc } from '../data.js';

export default function Home() {
  const headline = medicals.filter((m) => ['essential', 'standard', 'comprehensive'].includes(m.id));
  return (
    <>
      <section className="hero">
        <div className="hero-slash" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Pre-employment medicals that come to your site.</h1>
            <p className="lede">
              Our pharmacists run every assessment at your workplace or our Myaree rooms,
              and sign clear results the same day. Our Medical Director reviews anything flagged.
            </p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-lime btn-lg">Book an assessment</Link>
              <Link to="/services" className="btn btn-outline-light btn-lg">See prices</Link>
            </div>
            <p className="hero-foot">Perth metro, Kwinana, Henderson, Rockingham and Peel. Early starts and Saturday mornings.</p>
          </div>
          <ReportCard />
        </div>
      </section>

      <section className="levels" aria-label="Service levels">
        <div className="wrap levels-row">
          {serviceLevels.map((s) => (
            <div className="level" key={s.label}>
              <p className="level-value">{s.value}</p>
              <p className="level-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Who signs your report, and why it matters</h2>
            <p>
              Most workplace medicals are routine: every result is clear and the role carries no special risk.
              For those, a registered pharmacist working to our Medical Director’s written protocol signs the report.
              That’s how we turn reports around the same day.
            </p>
            <p>
              Anything outside the protocol’s limits goes to our Medical Director for review within one business day.
              Statutory health monitoring is always signed by the doctor.
            </p>
            <Link to="/how-it-works" className="text-link">How sign-off works</Link>
          </div>
          <ol className="routes" aria-label="Sign-off routes">
            <li>
              <span className="route-tag pharm">Pharmacist signs</span>
              <p>All results within protocol limits. Released the same day.</p>
            </li>
            <li>
              <span className="route-tag doc">Doctor reviews</span>
              <p>A result is flagged, an adjustment is needed, or the candidate asks to speak with a doctor.</p>
            </li>
            <li>
              <span className="route-tag doc">Doctor signs</span>
              <p>Silica, lead, asbestos and mine-worker health monitoring, with regulator reporting.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Prices you can see before you book</h2>
            <p>Fixed prices per role, ex-GST. No doctor fee on clear results.</p>
          </div>
          <div className="price-table" role="table" aria-label="Main medical packages">
            {headline.map((m) => (
              <div className={m.featured ? 'price-row featured' : 'price-row'} role="row" key={m.id}>
                <div role="cell" className="pr-name">
                  <h3>{m.name}</h3>
                  <p>{m.for}</p>
                </div>
                <div role="cell" className="pr-includes">{m.includes.join(' · ')}</div>
                <div role="cell" className="pr-price">
                  <span className="amount">${m.price}</span>
                  <span className="gst">${inc(m.price)} inc. GST</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/services" className="text-link">All services and add-ons</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>We bring the clinic to your gate</h2>
            <p>
              Our mobile clinic sets up at your site with hearing, lung function, drug and alcohol testing
              and a private consult space. A half-day visit can cover a whole shutdown crew before first shift.
            </p>
            <p>Can’t get away? Candidates can come to our Myaree consult room on weekday evenings or Saturday morning.</p>
          </div>
          <dl className="hours">
            <div><dt>Mobile clinic</dt><dd>Booked half-day sessions, from 6am</dd></div>
            <div><dt>Myaree consult room</dt><dd>Monday to Friday, 8am to 7pm</dd></div>
            <div><dt></dt><dd>Saturday, 8am to 12pm</dd></div>
            <div><dt>Bookings</dt><dd>Answered within one business hour</dd></div>
          </dl>
        </div>
      </section>

      <section className="section navy-band">
        <div className="wrap split">
          <div>
            <h2>Onboarding vaccinations in the same visit</h2>
            <p>
              With our sister business WA Workplace Vaccinations, our pharmacist immunisers can vaccinate new starters
              while they’re with us. Records go straight to the Australian Immunisation Register.
            </p>
            <Link to="/services#vaccinations" className="text-link light">Vaccinations we offer</Link>
          </div>
          <ul className="pill-list">
            {vaccines.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <h2>Tell us the role. We’ll set up the right assessment.</h2>
          <p>Send us the role and the number of people. We’ll quote the same day and book your first session within two business days.</p>
          <Link to="/book" className="btn btn-primary btn-lg">Book or enquire</Link>
        </div>
      </section>
    </>
  );
}
