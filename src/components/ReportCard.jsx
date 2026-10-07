// The hero's signature element: a faithful miniature of the report an employer receives.
export default function ReportCard() {
  return (
    <figure className="report" aria-label="Example of the report an employer receives">
      <div className="report-head">
        <img src="/brand/icon.svg" alt="" width="28" height="28" />
        <div>
          <p className="report-title">Pre-employment Health Screening Report</p>
          <p className="report-meta">Example only. Candidate details are illustrative.</p>
        </div>
      </div>
      <dl className="report-grid">
        <div><dt>Candidate</dt><dd>J. Citizen</dd></div>
        <div><dt>Role</dt><dd>Leading hand, fabrication</dd></div>
        <div><dt>Assessed</dt><dd>Kwinana site, 7:10am</dd></div>
        <div><dt>Released</dt><dd>Same day, 11:42am</dd></div>
      </dl>
      <div className="report-outcome">
        <span className="dot" aria-hidden="true" />
        <div>
          <p className="outcome-word">Suitable</p>
          <p className="outcome-sub">No health-related restrictions identified for the role as described.</p>
        </div>
      </div>
      <ul className="report-checks">
        <li>Health questionnaire</li>
        <li>Vitals and vision</li>
        <li>Hearing test</li>
        <li>Lung function</li>
        <li>20 kg lift and carry</li>
        <li>Drug and alcohol: negative</li>
      </ul>
      <figcaption className="report-sign">
        Signed by a registered pharmacist under our Medical Director’s protocol.
        Employers see the outcome, never a diagnosis.
      </figcaption>
    </figure>
  );
}
