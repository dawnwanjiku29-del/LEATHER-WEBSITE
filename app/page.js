import ShoppingAssistant from './shopping-assistant';
import ProductCollection from './product-collection';

export default function Home() {
  return (
    <>
      <div className="announcement" role="status">Handcrafted in Nairobi · Enquire on WhatsApp for availability</div>
      <header>
        <nav aria-label="Primary navigation">
          <a className="logo" href="#home">LOOKING GOOD <span>RUGGED</span></a>
          <ul>
            <li><a href="#bags">Shop</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#about">Our story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-index" aria-hidden="true">01 / 04</div>
          <div className="hero-content">
            <p className="eyebrow">AUTHENTIC LEATHER COLLECTION</p>
            <h1><span>Carry the</span><br />character.</h1>
            <p>Purposeful leather pieces for the workday, the weekend, and every road in between.</p>
            <div className="hero-actions">
              <a href="#featured" className="button">Shop featured pieces <span aria-hidden="true">↘</span></a>
              <a href="#about" className="text-link">Meet the makers <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="hero-product" aria-hidden="true">
            <img
              src="images/optimized/cutouts/bag20.webp"
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

        <section className="about" id="about">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>Made for the<br />life you lead.</h2>
          </div>
          <div className="story-copy"><p>Looking Good Rugged makes practical, expressive leather pieces for people who carry their day with them. Every bag is selected for its utility, warm material character and ability to settle beautifully into everyday life.</p><a href="#contact" className="text-link">Ask about a custom order <span aria-hidden="true">↘</span></a></div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Find Your Rugged Look</h2>
          <p>Message us for prices, availability, delivery options, and custom order requests.</p>
          <div className="contact-box">
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Ordering:</strong> Chat with us directly on WhatsApp</p>
          </div>
          <a className="button" href="https://wa.me/254720929666?text=Hello%20Looking%20Good%20Rugged%2C%20I%20would%20like%20to%20make%20an%20enquiry.">CHAT ON WHATSAPP</a>
        </section>
      </main>

      <footer><p>© 2026 Looking Good Rugged. Handcrafted in Nairobi.</p></footer>
    </>
  );
}
