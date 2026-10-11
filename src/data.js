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
  { id: 'hearing', name: 'Hearing test (AS/NZS 1269.4)', price: 75, note: 'Baseline and two-yearly' },
  { id: 'lung', name: 'Lung function test (TSANZ)', price: 75 },
  { id: 'uds', name: 'Instant urine drug screen + breath alcohol', price: 85, note: 'AS/NZS 4308:2023 devices' },
  { id: 'oral', name: 'Oral fluid drug screen', price: 89, note: 'AS 4760:2019' },
  { name: 'Laboratory confirmation', price: 145, note: 'NATA-accredited laboratory, per specimen' },
  { name: 'Respirator fit test (quantitative)', price: 125, note: 'Available from 2028' },
  { id: 'doctor', name: 'Doctor review add-on', price: 169, note: 'For flagged results, or on request' },
  { id: 'callout', name: 'On-site call-out (half day)', price: 250, note: 'Waived at 10 or more candidates' },
];

export const serviceLevels = [
  { value: '1 hour', label: 'to answer a booking request in business hours' },
  { value: '2 days', label: 'to an appointment, on your site or ours' },
  { value: 'Same day', label: 'for reports our pharmacists sign' },
  { value: '1 business day', label: 'for reports our doctor reviews' },
  { value: '9am', label: 'next day, every no-show reported' },
];

export const vaccines = ['Hepatitis B', 'Influenza', 'Tetanus / whooping cough (dTpa)', 'Measles, mumps, rubella', 'Chickenpox (varicella)', 'COVID-19'];

// Case status rail shown to employers (mirrors the booking system's status model, SOP-01 to SOP-20).
export const caseStatuses = [
  { key: 'booked', label: 'Booked', note: 'Order matched to the role package' },
  { key: 'consented', label: 'Consented', note: 'Candidate completes the questionnaire and consent' },
  { key: 'tested', label: 'Tested', note: 'Assessment done, results checked' },
  { key: 'review', label: 'In review', note: 'Only if a result is flagged' },
  { key: 'released', label: 'Report released', note: 'Outcome to your nominated contacts' },
  { key: 'invoiced', label: 'Invoiced', note: 'One line per candidate, with your PO' },
];

export const terms = [
  { h: 'Payment', p: 'Card for one-off bookings. Approved accounts are invoiced monthly on 30-day terms, with your purchase order on every line.' },
  { h: 'Cancelling or rescheduling', p: 'Free with 24 hours’ notice. Inside 24 hours we charge 50% of the fee, because the slot can’t be re-used. Cancelling a whole on-site session inside 48 hours incurs the call-out fee.' },
  { h: 'No-shows', p: 'Charged at the full fee. We tell you by 9am the next business day so you can follow up.' },
  { h: 'Prices', p: 'Fixed for 12 months from your account opening. We give 30 days’ notice of any change.' },
  { h: 'Records', p: 'We keep candidate health records under the Privacy Act. You receive the outcome report; the candidate can request their full record.' },
  { h: 'Reports', p: 'Released to the contacts you nominate through your employer portal or a secure link. We never send health information as an unencrypted attachment.' },
];

export const industries = [
  {
    id: 'construction',
    name: 'Construction and civil',
    drivers: 'Silica (engineered stone and concrete cutting), noise, working at heights, heavy manual handling.',
    tests: ['Comprehensive medical', 'Hearing baseline within 3 months of starting', 'Lung function', 'Drug and alcohol testing', 'Doctor-signed silica health monitoring'],
    pkg: 'comprehensive',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing, fabrication and defence supply',
    drivers: 'Noise, welding fume, isocyanates, lead, forklift and crane operation.',
    tests: ['Comprehensive medical', 'Two-yearly hearing tests', 'Lung function', 'Doctor-signed health monitoring for lead and isocyanates'],
    pkg: 'comprehensive',
  },
  {
    id: 'resources',
    name: 'Mining and resources contractors',
    drivers: 'Mine-worker health surveillance, fitness for remote and fly-in fly-out work, drug and alcohol policies.',
    tests: ['Standard or Comprehensive medical', 'Drug and alcohol testing with laboratory confirmation', 'Hearing and lung function', 'Doctor-signed mine-worker health surveillance'],
    pkg: 'comprehensive',
  },
  {
    id: 'logistics',
    name: 'Transport, warehousing and logistics',
    drivers: 'Safety-critical driving and plant operation, shift work, repetitive lifting.',
    tests: ['Standard medical with drug and alcohol', 'Vision and colour vision', 'Functional lift and task screen', 'Random and post-incident testing rounds'],
    pkg: 'standard',
  },
  {
    id: 'labour-hire',
    name: 'Labour hire and recruitment',
    drivers: 'High volume, short notice, many role types, clients who want proof before day one.',
    tests: ['Fixed price per role package', 'Same-day reports for clear results', 'Early-morning and Saturday slots', 'No-shows reported by 9am'],
    pkg: 'standard',
  },
  {
    id: 'health-care',
    name: 'Health, aged care and disability',
    drivers: 'Infection-control immunisation requirements, manual handling of clients, night shifts.',
    tests: ['Essential medical', 'Immunisation history check and catch-up vaccinations', 'Hepatitis B, MMR, varicella, dTpa and flu', 'Musculoskeletal screen'],
    pkg: 'essential',
  },
  {
    id: 'government',
    name: 'Local government and utilities',
    drivers: 'Outdoor crews, plant operators, panel and tender requirements.',
    tests: ['Essential to Comprehensive medicals by role', 'Hearing tests for parks and works crews', 'Published prices and written service levels for panels'],
    pkg: 'essential',
  },
  {
    id: 'office',
    name: 'Office, retail and hospitality',
    drivers: 'Low physical risk; employers want a quick, fair check without over-testing.',
    tests: ['Digital health screen, reviewed by a pharmacist', 'Essential medical for roles with lifting or standing', 'Workplace flu programs'],
    pkg: 'digital',
  },
];

export const contact = {
  email: 'hello@wawfm.com.au',
  bookingsEmail: 'bookings@wawfm.com.au',
  privacyEmail: 'privacy@wawfm.com.au',
};

export const inc = (p) => Math.round(p * (1 + GST));
