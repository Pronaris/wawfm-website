import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Digital health screen',
    who: 'Pharmacist signs',
    tone: 'pharm',
    body: 'For office and low-risk roles. The candidate completes an online questionnaire, which is scored automatically and then reviewed in full by a pharmacist. Any flag moves it to an in-person assessment.',
  },
  {
    name: 'Pharmacist assessment',
    who: 'Pharmacist signs clear results',
    tone: 'pharm',
    body: 'Our pharmacists and technicians test against the role’s Position Assessment Form: vitals, vision, urinalysis, hearing, lung function, a functional screen and drug and alcohol testing. If every result is inside the protocol’s limits, the pharmacist signs the report the same day.',
  },
  {
    name: 'Medical Director review',
    who: 'Doctor signs',
    tone: 'doc',
    body: 'The doctor reviews the file when a result is flagged, an adjustment or restriction may be needed, or the candidate asks to speak with a doctor. They may phone or video-call the candidate. You get an interim notice straight away and the final report within one business day.',
  },
  {
    name: 'Statutory health monitoring',
    who: 'Doctor signs and reports',
    tone: 'doc',
    body: 'This covers silica, lead, asbestos and isocyanates under the WHS regulations, and mine-worker health monitoring. Our team runs the tests under the doctor’s protocol. The Medical Director interprets the results, signs the report and notifies the regulator where the law requires it.',
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>How sign-off works</h1>
          <p className="lede">
            Pharmacists do the testing. A pharmacist signs a report when every result is clear,
            and a doctor signs when one isn’t. Written thresholds decide which, not anyone’s judgement on the day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ol className="tiers">
            {tiers.map((t, i) => (
              <li key={t.name} className="tier">
                <span className="tier-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h2>{t.name}</h2>
                  <p className={`route-tag ${t.tone}`}>{t.who}</p>
                  <p>{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap three">
          <div>
            <h2>What you receive</h2>
            <p>
              A health screening report against the role’s inherent requirements. It states the outcome: suitable, suitable with
              adjustments or restrictions, further information needed, or not suitable for the role as described.
              It also lists the tests completed. You make the employment decision.
            </p>
          </div>
          <div>
            <h2>What you never receive</h2>
            <p>
              Diagnoses, medication lists or questionnaire answers. Candidates consent separately to each disclosure,
              and we keep health information private under the Privacy Act.
            </p>
          </div>
          <div>
            <h2>How we keep it safe</h2>
            <p>
              Our Medical Director signs the protocol and audits a sample of pharmacist-signed reports.
              Equipment is calibrated, collectors and testers are credentialed, and incidents are reviewed every quarter.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>Common questions</h2>
          <details>
            <summary>Is a pharmacist-signed report a medical certificate?</summary>
            <p>
              No. It’s a health screening report that gives an opinion on whether the candidate can safely meet the role’s requirements.
              Outside schemes such as coal, rail and statutory health monitoring, no WA law requires a doctor to sign pre-employment assessments.
              Where the law does require a doctor, our Medical Director signs.
            </p>
          </details>
          <details>
            <summary>Can we have a doctor review every assessment?</summary>
            <p>Yes. Add the doctor review to your role packages and every report will carry the Medical Director’s signature.</p>
          </details>
          <details>
            <summary>What happens if a drug screen is non-negative?</summary>
            <p>
              The specimen is sealed and sent to a NATA-accredited laboratory. You’re told the result is pending confirmation.
              A doctor discusses any declared medication with the candidate before the confirmed result is released.
            </p>
          </details>
          <details>
            <summary>Can a candidate challenge an outcome?</summary>
            <p>Yes. A candidate who disputes an outcome gets a doctor review at no cost to them. You’ll be told the outcome is under review.</p>
          </details>
          <details>
            <summary>Do you ask about pregnancy or workers’ compensation history?</summary>
            <p>No. We only assess what relates to the role’s inherent requirements, in line with the Equal Opportunity Act 1984 (WA) and the Disability Discrimination Act.</p>
          </details>
          <Link to="/book" className="btn btn-primary">Book or enquire</Link>
        </div>
      </section>
    </>
  );
}
