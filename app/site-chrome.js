import Link from 'next/link';

export function SiteHeader() {
  return (
    <>
      <div className="announcement" role="status">Handcrafted in Nairobi · Enquire on WhatsApp for availability</div>
      <header>
        <nav aria-label="Primary navigation">
          <Link className="logo" href="/">LOOKING GOOD <span>RUGGED</span></Link>
          <ul>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/featured">Featured</Link></li>
            <li><Link href="/story">Our story</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return <footer><p>© 2026 Looking Good Rugged. Handcrafted in Nairobi.</p></footer>;
}
