import { Link } from 'react-router-dom';
import { contact } from '../data.js';

const before = [
  { h: 'Photo ID', p: 'A driver’s licence, passport or proof-of-age card. We can’t test without it.' },
  { h: 'Glasses, contacts and hearing aids', p: 'Wear or bring them. Vision is tested with your usual correction.' },
  { h: 'Your medicines', p: 'A list or the boxes, including anything prescribed that could show on a drug screen. You tell the pharmacist, not your employer.' },
  { h: 'Quiet ears', p: 'For a first (baseline) hearing test, avoid loud noise, including work noise, for at least 16 hours beforehand.' },
  { h: 'Comfortable clothes', p: 'Some packages include a lift and movement check. Enclosed shoes help.' },
  { h: 'About an hour', p: 'Most assessments take 30 to 60 minutes. Complete the online questionnaire first and you’ll be quicker.' },
];

const steps = [
  { t: 'Text and link', d: 'You get a text confirming the time and place, with a link to the health questionnaire and consent form.' },
  { t: 'Check-in', d: 'We confirm your ID, go through what each test is for and who will see what. You can ask questions or stop at any time.' },
  { t: 'Tests', d: 'Only the tests the role needs: for example blood pressure, vision, hearing, lung function, a urine or saliva drug screen and a movement check.' },
  { t: 'Result', d: 'If every result is clear, the pharmacist signs the report that day. If something needs a closer look, our doctor reviews it and may call you first.' },
];

export default function Candidates() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Booked in for a medical?</h1>
          <p className="lede">What to bring, what happens on the day, and who sees your results.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Before you come</h2>
          <div className="card-grid">
            {before.map((b) => <div className="card" key={b.h}><h3>{b.h}</h3><p>{b.p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>On the day</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}><span className="step-num" aria-hidden="true">{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap three">
          <div>
            <h2>What your employer sees</h2>
            <p>The outcome for the role (for example “suitable” or “suitable with adjustments”), which tests were done, and the drug and alcohol result. Never your answers, diagnoses or medicines.</p>
          </div>
          <div>
            <h2>If a drug screen isn’t clear</h2>
            <p>An on-the-spot screen is only a first check. A non-negative sample is sealed and sent to an accredited laboratory, and a doctor talks to you about any medicines before a result is confirmed.</p>
          </div>
          <div>
            <h2>Your rights</h2>
            <p>You can ask for a copy of your results, ask us to correct them, or ask for a doctor to review an outcome you disagree with, at no cost. Email <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.</p>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap narrow">
          <h2>Questions</h2>
          <details><summary>Do I have to answer every health question?</summary><p>No, but the assessment may not be completed without the information it needs. You can talk it through with the pharmacist privately.</p></details>
          <details><summary>Can I bring a support person or interpreter?</summary><p>Yes. Tell us when you book and we’ll allow extra time and arrange an interpreter if you need one.</p></details>
          <details><summary>I take prescribed medicine that might show on a drug test.</summary><p>Tell the pharmacist on the day. It stays confidential, and our doctor considers it before any result is confirmed.</p></details>
          <details><summary>I need to change my appointment.</summary><p>Reply to your booking text or email <a href={`mailto:${contact.bookingsEmail}`}>{contact.bookingsEmail}</a> at least 24 hours ahead.</p></details>
          <Link to="/privacy" className="text-link">Read our privacy policy</Link>
        </div>
      </section>
    </>
  );
}
