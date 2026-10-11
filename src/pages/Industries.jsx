import { Link } from 'react-router-dom';
import { industries, medicals, inc } from '../data.js';

export default function Industries() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Industries</h1>
          <p className="lede">The right tests depend on the hazards in the job, not the industry label. Here’s where most WA employers start.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <nav className="chip-nav" aria-label="Jump to an industry">
            {industries.map((i) => <a key={i.id} href={`#${i.id}`}>{i.name}</a>)}
          </nav>
          <div className="ind-list">
            {industries.map((i) => {
              const pkg = medicals.find((m) => m.id === i.pkg);
              return (
                <article className="ind" id={i.id} key={i.id}>
                  <div className="ind-main">
                    <h2>{i.name}</h2>
                    <p className="ind-drivers"><strong>What drives testing:</strong> {i.drivers}</p>
                    <ul className="ticks compact">{i.tests.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                  <div className="ind-pkg">
                    <p className="ind-pkg-label">Usual starting package</p>
                    <p className="ind-pkg-name">{pkg.name}</p>
                    <p className="amount">{pkg.from ? 'from ' : ''}${pkg.price}<span className="gst"> ex-GST · ${inc(pkg.price)} inc.</span></p>
                    <Link to="/quote" className="text-link">Estimate a quote</Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="small">
            Every account starts with a Position Assessment Form for each role. We test against the role’s inherent requirements,
            so a forklift operator and a site administrator at the same company get different packages.
          </p>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <h2>Not sure which tests a role needs?</h2>
          <p>Send us the position description. A pharmacist will map it to the right package and tell you which tests the law requires and which are optional.</p>
          <Link to="/book" className="btn btn-primary btn-lg">Ask a pharmacist</Link>
        </div>
      </section>
    </>
  );
}
