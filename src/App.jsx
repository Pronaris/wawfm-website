import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Employers from './pages/Employers.jsx';
import Book from './pages/Book.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';
import Quote from './pages/Quote.jsx';
import Industries from './pages/Industries.jsx';
import Partners from './pages/Partners.jsx';
import Candidates from './pages/Candidates.jsx';

const meta = {
  '/': ['WA WorkFit Medical | Workplace & pre-employment medicals, Perth', 'Pre-employment medicals, drug and alcohol testing, hearing and lung function tests on-site across Perth and at Myaree. Pharmacist-led, doctor-supervised, published prices, same-day reports.'],
  '/services': ['Services and prices | WA WorkFit Medical', 'Published, fixed prices for pre-employment medicals, drug and alcohol testing, hearing tests, lung function, health monitoring and workplace vaccinations in Perth.'],
  '/industries': ['Industries | WA WorkFit Medical', 'Pre-employment and workplace health testing for construction, manufacturing, resources, logistics, labour hire, health care and government employers in WA.'],
  '/how-it-works': ['How sign-off works | WA WorkFit Medical', 'Pharmacists sign clear results under our Medical Director’s written protocol. Flagged results and statutory health monitoring are signed by a doctor.'],
  '/employers': ['For employers | WA WorkFit Medical', 'Open an employer account: role packages, live candidate tracking, same-day reports, plain-English account terms.'],
  '/candidates': ['Information for candidates | WA WorkFit Medical', 'What to bring to your pre-employment medical, what happens on the day, and who sees your results.'],
  '/quote': ['Quote estimator | WA WorkFit Medical', 'Estimate the cost of pre-employment medicals for your roles, with GST, using our published prices.'],
  '/partners': ['Partner pharmacies | WA WorkFit Medical', 'WA pharmacy owners: deliver workplace health assessments for our employer clients for a fixed fee per completed test. Register for the pilot.'],
  '/book': ['Book or enquire | WA WorkFit Medical', 'Book a pre-employment medical or ask for a quote. We reply within one business hour.'],
  '/privacy': ['Privacy policy | WA WorkFit Medical', 'How WA WorkFit Medical collects, uses and protects health information under the Privacy Act 1988.'],
};

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const [title, desc] = meta[pathname] || ['Page not found | WA WorkFit Medical', meta['/'][1]];
    document.title = title;
    setMeta('description', desc);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
    canon.href = `https://wawfm.com.au${pathname === '/' ? '/' : pathname}`;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/book" element={<Book />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
