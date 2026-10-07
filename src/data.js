// Single source of truth for services, prices and service levels.
// Prices are ex-GST (employer-paid medicals are taxable supplies). Keep in step with
// the Operations Manual F04 and the financial model's Services sheet.

export const GST = 0.1;

export const medicals = [
  {
    id: 'digital',
    name: 'Digital health screen',
    price: 69,
    signedBy: 'Pharmacist',
    for: 'Office and low-risk roles',
    includes: ['Online health questionnaire', 'Reviewed in full by a pharmacist', 'Same-day report'],
  },
  {
    id: 'essential',
    name: 'Essential pre-employment medical',
    price: 179,
    signedBy: 'Pharmacist',
    for: 'Retail, hospitality, admin, light duties',
    includes: ['Health questionnaire review', 'Blood pressure, pulse, height, weight', 'Vision and colour vision', 'Urinalysis', 'Musculoskeletal screen'],
  },
  {
    id: 'standard',
    name: 'Standard medical + drug & alcohol',
    price: 239,
    signedBy: 'Pharmacist',
    for: 'Trades, logistics, labour hire, aged care',
    includes: ['Everything in Essential', 'Instant urine drug screen (AS/NZS 4308:2023)', 'Breath alcohol test'],
    featured: true,
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive medical',
    price: 429,
    signedBy: 'Pharmacist',
    for: 'Construction, industrial, shutdowns, defence supply chain',
    includes: ['Everything in Standard', 'Hearing test (AS/NZS 1269.4)', 'Lung function test', 'Functional lift and task screen to the role'],
  },
  {
    id: 'statutory',
    name: 'Health monitoring medical',
    price: 395,
    from: true,
    signedBy: 'Doctor',
    for: 'Silica, lead, asbestos and mine-worker health monitoring',
    includes: ['Tests by our pharmacy team under the doctor’s protocol', 'Interpreted and signed by our Medical Director', 'Regulator reporting where required'],
  },
];

export const tests = [
  { name: 'Hearing test (AS/NZS 1269.4)', price: 75, note: 'Baseline and two-yearly' },
  { name: 'Lung function test (TSANZ)', price: 75 },
  { name: 'Instant urine drug screen + breath alcohol', price: 85, note: 'AS/NZS 4308:2023 devices' },
  { name: 'Oral fluid drug screen', price: 89, note: 'AS 4760:2019' },
  { name: 'Laboratory confirmation', price: 145, note: 'NATA-accredited laboratory, per specimen' },
  { name: 'Respirator fit test (quantitative)', price: 125, note: 'Available from 2028' },
  { name: 'Doctor review add-on', price: 169, note: 'For flagged results, or on request' },
  { name: 'On-site call-out (half day)', price: 250, note: 'Waived at 10 or more candidates' },
];

export const serviceLevels = [
  { value: '1 hour', label: 'to answer a booking request in business hours' },
  { value: '2 days', label: 'to an appointment, on your site or ours' },
  { value: 'Same day', label: 'for reports our pharmacists sign' },
  { value: '1 business day', label: 'for reports our doctor reviews' },
  { value: '9am', label: 'next day, every no-show reported' },
];

export const vaccines = ['Hepatitis B', 'Influenza', 'Tetanus / whooping cough (dTpa)', 'Measles, mumps, rubella', 'Chickenpox (varicella)', 'COVID-19'];

export const contact = {
  email: 'hello@wawfm.com.au',
  bookingsEmail: 'bookings@wawfm.com.au',
  privacyEmail: 'privacy@wawfm.com.au',
};

export const inc = (p) => Math.round(p * (1 + GST));
