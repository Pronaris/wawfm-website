import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>That page isn’t here</h1>
        <p className="lede">The link may be out of date. Start from services and prices, or send us a request.</p>
        <p><Link to="/services" className="btn btn-primary">Services and prices</Link> <Link to="/book" className="btn btn-ghost">Book or enquire</Link></p>
      </div>
    </section>
  );
}
