import { contact } from '../data.js';

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Privacy policy</h1>
          <p className="lede">How WA WorkFit Medical collects, uses and protects health information. Draft for legal review, version 0.9, October 2026.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow prose">
          <h2>Who we are</h2>
          <p>WA WorkFit Medical provides workplace health assessments in Western Australia. As a health service provider, we are bound by the Privacy Act 1988 (Cth) and the Australian Privacy Principles, whatever our size.</p>

          <h2>What we collect</h2>
          <p>We collect four kinds of information:</p>
          <ul>
            <li>Contact and booking details.</li>
            <li>The employer and the role.</li>
            <li>Health information needed to assess the role’s inherent requirements, including questionnaire answers and test results.</li>
            <li>Specimens for drug and alcohol testing.</li>
          </ul>
          <p>We collect health information only with your consent, and only what the role requires.</p>

          <h2>What your employer receives</h2>
          <p>With your written consent, your employer receives:</p>
          <ul>
            <li>The outcome.</li>
            <li>Any recommended adjustments or restrictions.</li>
            <li>The tests completed.</li>
            <li>Your drug and alcohol result.</li>
            <li>Your hearing classification.</li>
          </ul>
          <p>We don’t give employers diagnoses, medication lists or questionnaire answers unless you give separate, specific consent.</p>

          <h2>Automated scoring</h2>
          <p>Our online health questionnaire is scored automatically against written criteria. A registered pharmacist reviews every result in full, and no outcome is decided by software alone.</p>

          <h2>Where we store it</h2>
          <p>Health information is stored in Australia on systems with access controls, multi-factor authentication and encryption. We keep records as long as the law requires: generally 7 years, and 30 years for statutory health monitoring.</p>

          <h2>Your rights</h2>
          <p>You can ask for a copy of your information, or ask us to correct it. Email <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a> and we’ll respond within 30 days.</p>

          <h2>Data breaches</h2>
          <p>If a breach is likely to cause serious harm, we’ll notify you and the Office of the Australian Information Commissioner as required by the Notifiable Data Breaches scheme.</p>

          <h2 id="complaints">Feedback and complaints</h2>
          <p>Email <a href={`mailto:${contact.email}`}>{contact.email}</a>. We’ll acknowledge your complaint within 2 business days and aim to resolve it within 20. If you’re not satisfied, you can contact the Health and Disability Services Complaints Office (HaDSCO) in WA, or the Office of the Australian Information Commissioner about privacy.</p>
        </div>
      </section>
    </>
  );
}
