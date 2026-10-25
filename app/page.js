import ShoppingAssistant from './shopping-assistant';
import ProductCollection from './product-collection';
import Link from 'next/link';
import { assetPath } from './asset-path';
import { SiteFooter, SiteHeader } from './site-chrome';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero-index" aria-hidden="true">01 / 04</div>
          <div className="hero-content">
            <p className="eyebrow">AUTHENTIC LEATHER COLLECTION</p>
            <h1><span>Carry the</span><br />character.</h1>
            <p>Purposeful leather pieces for the workday, the weekend, and every road in between.</p>
            <div className="hero-actions">
              <Link href="/featured" className="button">Shop featured pieces <span aria-hidden="true">↘</span></Link>
              <Link href="/story" className="text-link">Meet the makers <span aria-hidden="true">↘</span></Link>
            </div>
          </div>
          <div className="hero-product" aria-hidden="true">
            <img
              src={assetPath('images/optimized/cutouts/bag20.webp')}
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <p className="hero-note">Made for the everyday<br />and the long way round.</p>
        </section>

        <section className="manifesto" aria-label="Our approach">
          <p className="eyebrow">01 — THE MATERIAL</p>
          <p className="manifesto-copy">The marks of use are not an afterthought. They are part of the design.</p>
          <p className="manifesto-detail">Designed to become part of your routine—then part of your story.</p>
        </section>

        <ProductCollection />

        <ShoppingAssistant />

        <section className="service-promises" aria-label="Why shop with us">
          <article><span>01</span><h2>Made with purpose</h2><p>Considered leather pieces with useful details and enduring character.</p></article>
          <article><span>02</span><h2>Personal ordering</h2><p>Chat directly with us to confirm availability, colour and the right fit.</p></article>
          <article><span>03</span><h2>Care beyond checkout</h2><p>Ask us how to care for your piece so it can travel with you for years.</p></article>
        </section>

        <section className="order-journey" aria-labelledby="order-journey-title">
          <div className="order-journey-heading">
            <p className="eyebrow">CUSTOM ORDERS</p>
            <h2 id="order-journey-title">A considered piece starts with a conversation.</h2>
          </div>
          <ol>
            <li><span>01</span><h3>Choose your direction</h3><p>Tell us the style, colour and purpose you have in mind.</p></li>
            <li><span>02</span><h3>Confirm the details</h3><p>We confirm availability, options, dimensions and delivery with you directly.</p></li>
            <li><span>03</span><h3>Pay on delivery</h3><p>Your order is paid for when it arrives.</p></li>
          </ol>
          <Link href="/contact" className="text-link order-journey-link">Start an enquiry <span aria-hidden="true">↘</span></Link>
        </section>

        <section className="gift-callout" aria-labelledby="gift-title">
          <img src={assetPath('images/optimized/studio/bag15.webp')} alt="Handcrafted leather clutch bag" loading="lazy" decoding="async" />
          <div>
            <p className="eyebrow">GIFTING &amp; CORPORATE ORDERS</p>
            <h2 id="gift-title">Give something made to be carried.</h2>
            <p>For a milestone, a team, or a client: ask us about a leather gift or a larger order.</p>
            <Link href="/contact" className="button">Plan an order <span aria-hidden="true">↘</span></Link>
          </div>
        </section>

        <section className="journal-preview" aria-labelledby="journal-title">
          <div className="journal-heading"><p className="eyebrow">THE LEATHER JOURNAL</p><h2 id="journal-title">Useful notes for a life in leather.</h2><Link href="/journal" className="text-link journal-link">Read the journal <span aria-hidden="true">↘</span></Link></div>
          <div className="journal-cards">
            <article><span>01</span><h3>Care that lets leather age well.</h3><p>Simple habits that help preserve the character of a piece you use often.</p></article>
            <article><span>02</span><h3>Choosing a bag for the way you move.</h3><p>Start with what you carry, where you go and how you want it to feel.</p></article>
            <article><span>03</span><h3>Patina is a record of use.</h3><p>Why the marks, tone and softness that develop over time are worth keeping.</p></article>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>Made for the<br />life you lead.</h2>
          </div>
          <div className="story-copy"><p>Looking Good Rugged makes practical, expressive leather pieces for people who carry their day with them. Every bag is selected for its utility, warm material character and ability to settle beautifully into everyday life.</p><Link href="/contact" className="text-link">Ask about a custom order <span aria-hidden="true">↘</span></Link></div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Find Your Rugged Look</h2>
          <p>Message us for prices, availability, delivery options, and custom order requests.</p>
          <div className="contact-box">
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Ordering:</strong> Chat with us directly on WhatsApp</p>
            <p><strong>Payment:</strong> Pay on delivery</p>
          </div>
          <a className="button" href="https://wa.me/254720929666?text=Hello%20Looking%20Good%20Rugged%2C%20I%20would%20like%20to%20make%20an%20enquiry.">CHAT ON WHATSAPP</a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
