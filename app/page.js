import ShoppingAssistant from './shopping-assistant';

const products = [
  ['bag1', 'BRIEFCASE', 'Rugged Leather Briefcase', 'Strong, practical and made for a professional look.'],
  ['bag2', 'SATCHEL', 'Classic Leather Satchel', 'A timeless leather design for everyday use.'],
  ['bag3', 'TOTE BAG', 'Cowhide Leather Tote', 'A spacious tote with a distinctive natural finish.'],
  ['bag4', 'TRAVEL BAG', 'Rugged Travel Duffel', 'A durable travel companion for work and adventure.'],
  ['bag5', 'PREMIUM', 'Handcrafted Leather Bag', 'Warm brown leather with detailed stitching and straps.'],
  ['bag6', 'SHOULDER BAG', 'Leather Shoulder Bag', 'Compact, stylish and easy to carry anywhere.'],
  ['bag7', 'HANDBAG', 'Classic Brown Handbag', 'Simple leather styling with a strong, elegant finish.'],
  ['bag8', 'PORTFOLIO', 'Leather Portfolio', 'A clean leather folder for documents and essentials.'],
  ['bag9', 'TOTE BAG', 'Premium Leather Tote', 'Spacious and stylish for work or daily use.'],
  ['bag10', 'CARRY BAG', 'Leather Carry Bag', 'A rugged design built for everyday carrying.'],
  ['bag11', 'ACCESSORY', 'Rugged Phone Pouch', 'A handcrafted leather pouch for small essentials.'],
  ['bag12', 'LEATHER HOME', 'Handcrafted Leather Seat', 'A warm, handcrafted leather piece with decorative stitching.'],
  ['bag13', 'BACKPACK', 'Rugged Everyday Backpack', 'A practical backpack designed for everyday carrying and travel.'],
  ['bag14', 'BACKPACK', 'Classic Leather Backpack', 'Comfortable, durable and made for a rugged everyday look.'],
  ['bag15', 'ACCESSORY', 'Beaded Leather Pouches', 'Stylish handmade leather pouches with colourful beadwork.'],
  ['bag16', 'CROSSBODY BAG', 'Cowhide Leather Crossbody', 'A distinctive everyday crossbody finished with natural cowhide detail.'],
  ['bag17', 'ACCESSORY', 'Beaded Leather Wristlet', 'A compact leather pouch with a colourful handcrafted beaded centrepiece.'],
  ['bag18', 'TRAVEL BAG', 'Tan Leather Travel Duffel', 'A spacious, softly structured leather duffel made for weekends away.']
];

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

        <section className="products" id="bags" aria-labelledby="bags-title">
          <div className="heading">
            <p className="eyebrow">OUR COLLECTION</p>
            <h2 id="bags-title">Leather Bags</h2>
            <p>Explore our collection of handcrafted leather products.</p>
          </div>
          <div className="grid">
            {products.map(([image, tag, name, description]) => (
              <article className="card" key={image}>
                <div className="image-box">
                  <img src={`/images/studio/${image}.png`} alt={name} />
                </div>
                <div className="info">
                  <span className="tag">{tag}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a className="enquire" href="#contact">Enquire about this bag</a>
                </div>
              </article>
            ))}
          </div>
        </section>

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
