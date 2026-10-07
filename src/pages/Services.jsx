import { Link } from 'react-router-dom';
import { medicals, tests, vaccines, inc } from '../data.js';

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Services and prices</h1>
          <p className="lede">
            Every price is fixed and published. Prices exclude GST because employer-paid medicals attract GST.
            Volume pricing starts at 100 assessments a year.
          </p>
        </div>
      </section>

      <section className="section" id="medicals">
        <div className="wrap">
          <h2>Pre-employment and workplace medicals</h2>
          <div className="pkg-list">
            {medicals.map((m) => (
              <article className={m.featured ? 'pkg featured' : 'pkg'} key={m.id}>
                <header>
                  <h3>{m.name}</h3>
                  <p className="pkg-for">{m.for}</p>
                </header>
                <ul>{m.includes.map((i) => <li key={i}>{i}</li>)}</ul>
                <footer>
                  <p className="amount">{m.from ? 'from ' : ''}${m.price}<span className="gst"> ex-GST · ${inc(m.price)} inc.</span></p>
                  <p className={m.signedBy === 'Doctor' ? 'signer doc' : 'signer pharm'}>Signed by {m.signedBy === 'Doctor' ? 'our Medical Director' : 'a pharmacist'}</p>
                </footer>
              </article>
            ))}
          </div>
          <p className="small">
            If a result is flagged, our Medical Director reviews it within one business day. The doctor review add-on is $169 ex-GST.
            Key accounts can choose doctor review on every assessment.
          </p>
        </div>
      </section>

      <section className="section tint" id="tests">
        <div className="wrap">
          <h2>Standalone tests and add-ons</h2>
          <table className="table">
            <thead>
              <tr><th scope="col">Service</th><th scope="col">Notes</th><th scope="col" className="num">Ex-GST</th><th scope="col" className="num">Inc. GST</th></tr>
            </thead>
            <tbody>
              {tests.map((t) => (
                <tr key={t.name}>
                  <th scope="row">{t.name}</th>
                  <td>{t.note || ''}</td>
                  <td className="num">${t.price}</td>
                  <td className="num">${inc(t.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="notes-grid">
            <div>
              <h3>Drug and alcohol testing</h3>
              <p>
                We use urine devices certified to AS/NZS 4308:2023 and oral fluid devices to AS 4760:2019. Our collectors are trained under HLTPAT005,
                and every specimen is under chain of custody. A non-negative result is never reported as positive until a
                NATA-accredited laboratory confirms it. A doctor discusses any declared medication with the candidate first.
              </p>
            </div>
            <div>
              <h3>Hearing tests</h3>
              <p>
                Under the WA mines safety regulations, workers who regularly wear hearing protection need a hearing test within 3 months
                of starting and at least every 2 years. We test to AS/NZS 1269.4 with calibrated audiometers, on your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="vaccinations">
        <div className="wrap split">
          <div>
            <h2>Workplace vaccinations</h2>
            <p>
              Our pharmacist immunisers vaccinate under the WA Health authority for pharmacist immunisation. Vaccines are supplied
              by Warnbro Pharmacy and recorded on the Australian Immunisation Register. We run catch-up programs for
              health-care and aged-care workers, and seasonal flu programs with WA Workplace Vaccinations.
            </p>
            <p className="small">
              We refer Q fever and hepatitis A to a partner GP or nurse immuniser, because they sit outside pharmacist scope in WA.
            </p>
          </div>
          <ul className="pill-list dark">{vaccines.map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>What we refer elsewhere</h2>
          <p>
            Coal board, rail category 1 and 2, seafarer, aviation, diving and commercial driver medicals need
            scheme-approved doctors. We’ll point you to the right provider, and we can still run drug and alcohol testing and hearing tests for those workers.
          </p>
          <Link to="/book" className="btn btn-primary">Get a quote</Link>
        </div>
      </section>
    </>
  );
}
