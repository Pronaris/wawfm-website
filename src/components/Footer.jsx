import { Link } from 'react-router-dom';
import { contact } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img src="/brand/logo-white-text.svg" alt="WA WorkFit Medical" width="210" height="46" />
          <p className="footer-note">
            Pharmacist-led, doctor-supervised workplace health assessments across Perth.
            A sister business of WA Workplace Vaccinations,
            from the team at Warnbro Pharmacy.
          </p>
        </div>
        <div>
          <h2 className="footer-h">Services</h2>
          <ul>
            <li><Link to="/services#medicals">Pre-employment medicals</Link></li>
            <li><Link to="/services#tests">Drug and alcohol testing</Link></li>
            <li><Link to="/services#tests">Hearing and lung function</Link></li>
            <li><Link to="/services#vaccinations">Workplace vaccinations</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Company</h2>
          <ul>
            <li><Link to="/how-it-works">How sign-off works</Link></li>
            <li><Link to="/employers">Open an employer account</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/privacy#complaints">Feedback and complaints</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Contact</h2>
          <ul>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={`mailto:${contact.bookingsEmail}`}>{contact.bookingsEmail}</a></li>
            <li>On-site across Perth metro</li>
            <li>Consult room in Myaree</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {year} WA WorkFit Medical. Prices exclude GST unless shown otherwise.</p>
        <p>Our reports are health screening reports for employers, not medical certificates. Statutory health monitoring is signed by a registered medical practitioner.</p>
      </div>
    </footer>
  );
}
