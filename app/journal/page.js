import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata = {
  title: 'The Leather Journal | Looking Good Rugged',
  description: 'Practical notes on choosing, carrying and caring for leather bags.'
};

const entries = [
  {
    number: '01',
    title: 'Care that lets leather age well.',
    body: 'Wipe dust away with a soft, dry cloth after regular use. Keep leather away from prolonged sun, moisture and heat, and let it air-dry naturally if it gets wet. For a new care product, always test a small hidden area first.'
  },
  {
    number: '02',
    title: 'Choose the bag around your day.',
    body: 'Start with what you carry most often: a laptop and documents, a weekend change of clothes, or just your daily essentials. Then ask us for the exact width, height and depth so the piece works for your real routine.'
  },
  {
    number: '03',
    title: 'Let the patina tell the story.',
    body: 'Leather changes through use. A little softness, variation in tone and gentle marking can become part of its character. Consistent care keeps that character intentional and helps the piece stay useful for longer.'
  }
];

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-intro journal-intro">
          <p className="eyebrow">THE LEATHER JOURNAL</p>
          <h1>Notes for the things you carry.</h1>
          <p>Practical guidance for choosing a leather piece, looking after it, and letting it become part of your story.</p>
        </section>
        <section className="journal-entries" aria-label="Leather journal entries">
          {entries.map((entry) => <article key={entry.number}><span>{entry.number}</span><h2>{entry.title}</h2><p>{entry.body}</p></article>)}
        </section>
        <section className="journal-cta"><p className="eyebrow">NEED HELP CHOOSING?</p><h2>Ask us about the right piece for your day.</h2><Link href="/contact" className="button">Talk to us on WhatsApp <span aria-hidden="true">↘</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
