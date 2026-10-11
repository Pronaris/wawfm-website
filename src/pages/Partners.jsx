import PartnerForm from '../components/PartnerForm.jsx';

const give = [
  { h: 'Employer work, routed to you', p: 'We win and hold the employer contracts, then book candidates into partner pharmacies near their site.' },
  { h: 'A fixed fee for each completed test', p: 'Paid monthly on a statement listing each case. No franchise fee, no royalty and no share of your pharmacy’s turnover.' },
  { h: 'The clinical system', p: 'Our Medical Director’s written protocols, the forms, the booking and reporting platform, and doctor review for anything flagged.' },
  { h: 'Training and audit', p: 'Online modules, an observed practical assessment by our clinical lead, and audits of your first 20 cases, then regular sampling.' },
];

const need = [
  'A registered pharmacy in WA with a private, lockable consult room',
  'A pharmacist who will complete our training and be credentialled for each test',
  'Rostered time for assessments, kept separate from dispensing',
  'Professional indemnity that confirms cover for workplace health assessments',
  'For hearing tests: a calibrated audiometer and a quiet enough room or a booth (we can advise)',
];

const chain = [
  { t: 'Online training', d: 'Network modules on consent, privacy, each test and our escalation rules. Pass mark 80%.' },
  { t: 'Observed practice', d: 'Our clinical lead watches your pharmacist run each test end to end, including a refusal and a non-negative drug screen.' },
  { t: 'Site and equipment check', d: 'Room, calibration records, specimen handling and three failure drills: withdrawn consent, lapsed calibration and a report sent to the wrong employer.' },
  { t: 'Authorised per test', d: 'Our Medical Director authorises each pharmacist, at each site, for each test, with an expiry date. Only then can we book candidates to you.' },
  { t: 'Kept current', d: 'If a registration, calibration or credential lapses, bookings for that test stop automatically until it’s fixed. Other tests keep running.' },
];

const faqs = [
  { q: 'Is this a franchise?', a: 'It’s designed as a service agreement: we pay you a fixed fee per completed test and you pay us nothing. We’re taking legal advice on the Franchising Code and the WA Pharmacy Act before anyone signs, and we won’t offer anything that needs franchise disclosure until it’s in place.' },
  { q: 'What can my pharmacist sign?', a: 'Once credentialled, your pharmacist can sign reports where every result is inside our Medical Director’s written limits. Anything flagged goes to our doctor. Statutory health monitoring and rail medicals are always doctor-signed.' },
  { q: 'Will it pull my pharmacist off the dispensary?', a: 'It shouldn’t. Assessments are booked into time you roster for them, not squeezed between scripts. We won’t send candidates outside the hours you give us.' },
  { q: 'Who owns the records?', a: 'WA WorkFit Medical holds the clinical record under the Privacy Act, on Australian-hosted systems. Your team enters results straight into our platform; nothing health-related stays on pharmacy systems.' },
  { q: 'How much work will we get?', a: 'We can’t promise volumes, and we won’t. We start partners where we already have employer demand nearby, and we share our booking forecasts with you each month.' },
];

export default function Partners() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Partner pharmacies</h1>
          <p className="lede">
            We’re inviting a small pilot group of WA pharmacies to deliver workplace health assessments for our employer clients,
            using your consult room and your pharmacists’ skills.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>How the partnership works</h2>
            <p>
              Employers book through WA WorkFit Medical. When a candidate is closer to you than to our Myaree room or mobile clinic,
              we book them into your pharmacy. Your pharmacist runs the tests to our protocol and enters results into our platform.
              We release the report, invoice the employer and pay you.
            </p>
            <p className="small">
              The pilot depends on legal advice, insurer confirmation and our Medical Director’s sign-off. Nothing on this page is an offer
              or a forecast of earnings.
            </p>
          </div>
          <dl className="give-list">
            {give.map((g) => <div key={g.h}><dt>{g.h}</dt><dd>{g.p}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>From interested to authorised</h2>
          <p className="section-sub">Every step leaves its own evidence. No step can be skipped, and no commercial manager can override one.</p>
          <ol className="chain">
            {chain.map((c, i) => (
              <li key={c.t}>
                <span className="chain-num" aria-hidden="true">{i + 1}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What you’ll need</h2>
            <ul className="ticks">{need.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>
          <div>
            <h2>Questions owners ask</h2>
            {faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" id="register">
        <div className="wrap book-grid">
          <div>
            <h2>Register your interest</h2>
            <p>Tell us about your pharmacy. We’ll call to talk it through. There’s no cost and no commitment.</p>
            <PartnerForm />
          </div>
          <aside className="book-aside">
            <h2>Where we’re looking first</h2>
            <p>Industrial corridors where employers need regular testing: Rockingham–Kwinana, Henderson–Bibra Lake, Welshpool–Kewdale, Malaga–Wangara and Mandurah.</p>
            <h2>Already working with us?</h2>
            <p>WA WorkFit Medical is a sister business of WA Workplace Vaccinations, from the team at Warnbro Pharmacy.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
