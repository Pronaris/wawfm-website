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

const titles = {
  '/': 'WA WorkFit Medical | Workplace & pre-employment medicals, Perth',
  '/services': 'Services and prices | WA WorkFit Medical',
  '/how-it-works': 'How sign-off works | WA WorkFit Medical',
  '/employers': 'For employers | WA WorkFit Medical',
  '/book': 'Book or enquire | WA WorkFit Medical',
  '/privacy': 'Privacy policy | WA WorkFit Medical',
};

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || 'WA WorkFit Medical';
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
