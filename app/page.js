import ShoppingAssistant from './shopping-assistant';
import ProductCollection from './product-collection';

export default function Home() {
  const basePath = process.env.GITHUB_ACTIONS ? '/LEATHER-WEBSITE' : '';

  return (
    <>
      <header>
        <nav aria-label="Primary navigation">
          <a className="logo" href="#home">LOOKING GOOD <span>RUGGED</span></a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#bags">Bags</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{ backgroundImage: `linear-gradient(105deg, rgba(45, 25, 18, .94), rgba(72, 40, 29, .82)), url('${basePath}/images/studio/bag4.png')` }}
        >
          <div className="hero-index" aria-hidden="true">01 / 04</div>
          <div className="hero-content">
            <p className="eyebrow">AUTHENTIC LEATHER COLLECTION</p>
            <h1><span>Carry the</span><br />character.</h1>
            <p>Leather bags with the strength to work hard and the presence to be remembered.</p>
            <div className="hero-actions">
              <a href="#bags" className="button">Explore the collection <span aria-hidden="true">↘</span></a>
              <a href="#about" className="text-link">Our point of view <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <p className="hero-note">Made for the everyday<br />and the long way round.</p>
        </section>

        <section className="manifesto" aria-label="Our approach">
          <p className="eyebrow">01 — THE MATERIAL</p>
          <p className="manifesto-copy">The marks of use are not an afterthought. They are part of the design.</p>
          <p className="manifesto-detail">A considered collection of leather pieces for work, travel, and the stories in between.</p>
        </section>

        <ProductCollection />

        <ShoppingAssistant />

        <section className="about" id="about">
          <div>
            <p className="eyebrow">ABOUT US</p>
            <h2>Made to Look Good.<br />Built to Last.</h2>
          </div>
          <p>Looking Good Rugged creates practical and stylish leather products designed for everyday life, work and travel. Our collection combines strong construction with a classic rugged appearance.</p>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Find Your Rugged Look</h2>
          <p>Contact us to place an order or ask about our leather collection.</p>
          <div className="contact-box">
            <p><strong>Email:</strong> <a href="mailto:lookinggoodrugged@example.com">lookinggoodrugged@example.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+254720929666">+254 720 929 666</a></p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </div>
          <a className="button" href="mailto:lookinggoodrugged@example.com">EMAIL US</a>
        </section>
      </main>

      <footer><p>© 2026 Looking Good Rugged. All Rights Reserved.</p></footer>
    </>
  );
}
