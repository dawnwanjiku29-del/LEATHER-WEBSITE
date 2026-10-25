import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata = {
  title: 'Our Story | Looking Good Rugged',
  description: 'Learn about the utility, material character and everyday spirit behind Looking Good Rugged.'
};

export default function StoryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-intro story-intro">
          <p className="eyebrow">OUR STORY</p>
          <h1>Made for the life you lead.</h1>
          <p>Practical, expressive leather pieces for people who carry their day with them.</p>
        </section>
        <section className="story-page-content">
          <div>
            <p className="eyebrow">THE MATERIAL</p>
            <h2>Character is part of the design.</h2>
          </div>
          <div>
            <p>Looking Good Rugged selects leather goods for utility, warm material character and the ability to settle beautifully into everyday life. The marks of use are not an afterthought; they become part of each piece’s story.</p>
            <p>From the workday to a weekend away, every choice begins with the question: will this make carrying life a little better?</p>
            <Link href="/contact" className="button">Ask about a custom order <span aria-hidden="true">↘</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
