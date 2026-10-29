// =====================================================================
// site.js — ALL the editable business info and text lists live here.
// Change a value, save, and the page updates. Keep the quotes and commas.
// Curly apostrophes (’) are used on purpose; you can type a plain ' too.
// =====================================================================

export const business = {
  name: 'Lee Thorley Construction',
  // How the phone number looks on the page, and the number the phone dials.
  phoneDisplay: '604 617 7640',
  phoneTel: '16046177640',
  email: 'thorleyconstruction@gmail.com',
  // Mailing address (shown in the contact section and used for Google).
  address: {
    street: 'P.O. Box 423',
    city: 'Lions Bay',
    region: 'BC',
    postalCode: 'V0N 2E0',
    country: 'CA',
  },
  hours: {
    days: 'Mon to Fri',
    time: '8:30am to 5:30pm',
    // Machine-readable version for search engines.
    schema: 'Mo-Fr 08:30-17:30',
  },
  areaServed: ['North Shore', 'Vancouver'],
  socials: {
    facebook: 'https://www.facebook.com/leethorleyconstruction/',
  },
};

// Page title and description used by Google and when the link is shared.
export const seo = {
  title: 'Lee Thorley Construction | Renovation specialist, North Shore & Vancouver',
  description:
    'Lee Thorley Construction: new builds and renovations of every size on Vancouver’s North Shore, from small repairs to complete homes. 25 years in the trade. Free estimates.',
};

// ---------------------------------------------------------------------
// Contact form. Leave FORM_ENDPOINT as "" and the form opens the
// visitor's email app with everything filled in, addressed to the email
// above. To receive submissions directly instead, create a free form at
// https://formspree.io and paste its endpoint here, for example:
//   export const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
// ---------------------------------------------------------------------
export const FORM_ENDPOINT = '';

// "Any size of job." — the three selectable items in the services list.
// t = label, h = heading, p = paragraph, list = bullet lines.
export const services = [
  {
    t: 'One-day jobs',
    h: 'The jobs that never get done.',
    p: 'Repairs and small renovations you’ve been putting off. Lee started his company focused on residential repairs and small renovations, and still takes them on.',
    list: ['Repairs', 'Small renovations', 'Gates and fence fixes'],
  },
  {
    t: 'One-week projects',
    h: 'Decks, fences, kitchens and bathrooms.',
    p: 'Focused projects with realistic schedules that work around your life, and a clean site at the end of every day.',
    list: ['Decks & fences', 'Kitchens', 'Bathrooms'],
  },
  {
    t: 'Complete homes',
    h: 'Complete home renovations and new builds.',
    p: 'Larger projects managed with a team of top-rate industry professionals, with top-notch quality in every area of the build.',
    list: ['Complete home renovations', 'New builds', 'Larger projects'],
  },
];

// Which service is selected when the page loads (0 = first, 1 = second...).
export const defaultService = 1;

// "My name is Lee." — the four story blocks on the right.
export const story = [
  { t: 'Started in cabinets', d: 'Lee began in the cabinet industry before moving into general renovations, including projects at Children’s Hospital in Vancouver.' },
  { t: 'Built my own company', d: 'Focused first on residential repairs and small renovations, then took on larger projects every year.' },
  { t: 'Aligned with the best', d: 'Working with industry professionals to keep high standards in quality, professionalism and conscientiousness.' },
  { t: 'Grown by word of mouth', d: 'Referrals and repeat customers have driven the company’s steady growth on the North Shore.' },
];

// "My promise." — one line each.
export const promise = [
  'Only the best materials available.',
  'A 1-year guarantee on all labour.',
  'Realistic schedules that work around your life. Quality is never compromised for time.',
  'Contracts are paid in full only when the work is finished to your complete satisfaction.',
];

// Testimonials. q = quote (no quote marks needed), n = name, c = city.
export const reviews = [
  { q: 'Lee has completed two large renovation projects for me. His work is very meticulous, he explains everything beforehand and as he goes, so I can make decisions that best meet my needs. Friendly, very professional, and he cleaned up at the end of every day.', n: 'Cynthia Dean', c: 'Coquitlam' },
  { q: 'We hired Lee to install a gate in the fence of our strata unit, where one didn’t exist. He listened to all of our concerns and executed the project beautifully. Punctual, efficient, and he’s the first person we call for future upgrades.', n: 'Doreen & Steve Myddleton', c: 'North Vancouver' },
];

// Project-type buttons ("chips") in the contact form.
export const chips = ['Repair', 'Deck or fence', 'Kitchen', 'Bathroom', 'Full renovation', 'New build'];
