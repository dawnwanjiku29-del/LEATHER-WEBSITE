import ShoppingAssistant from './shopping-assistant';
import ProductCollection from './product-collection';

export default function Home() {
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
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">AUTHENTIC LEATHER COLLECTION</p>
            <h1>Rugged Style.<br />Timeless Quality.</h1>
            <p>Quality leather bags made for people who appreciate strength, style and character.</p>
            <a href="#bags" className="button">VIEW OUR BAGS</a>
          </div>
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
