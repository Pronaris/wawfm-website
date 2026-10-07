import EnquiryForm from '../components/EnquiryForm.jsx';
import { contact } from '../data.js';

export default function Book() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Book or enquire</h1>
          <p className="lede">Tell us who needs assessing and where. We reply within one business hour.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap book-grid">
          <EnquiryForm />
          <aside className="book-aside">
            <h2>What happens next</h2>
            <ol>
              <li>We confirm the right package for the role and send a quote.</li>
              <li>We book a time at your site or our Myaree consult room.</li>
              <li>Candidates get a text with what to bring and a link to the health questionnaire.</li>
            </ol>
            <h2>Prefer email?</h2>
            <p><a href={`mailto:${contact.bookingsEmail}`}>{contact.bookingsEmail}</a></p>
            <h2>Candidates</h2>
            <p>Bring photo ID, your glasses or hearing aids, and a list of your medicines. Avoid loud noise for 12 hours before a hearing test.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
