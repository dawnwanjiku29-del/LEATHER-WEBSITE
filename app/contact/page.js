import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata = {
  title: 'Contact | Looking Good Rugged',
  description: 'Contact Looking Good Rugged in Nairobi for leather bag prices, availability, delivery and custom orders.'
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact contact-page" aria-labelledby="contact-title">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1 id="contact-title">Find your rugged look.</h1>
          <p>Message us for prices, availability, delivery options, and custom order requests.</p>
          <div className="contact-box">
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Ordering:</strong> Chat with us directly on WhatsApp</p>
            <p><strong>Order time:</strong> Approximately two weeks</p>
            <p><strong>Payment:</strong> Pay on delivery</p>
          </div>
          <a className="button" href="https://wa.me/254720929666?text=Hello%20Looking%20Good%20Rugged%2C%20I%20would%20like%20to%20place%20an%20order.">Place your order</a>
        </section>
        <section className="policy-guide" aria-labelledby="policy-title">
          <div>
            <p className="eyebrow">ORDER GUIDE</p>
            <h2 id="policy-title">Clear before you order.</h2>
          </div>
          <div className="policy-table-wrap">
            <table>
              <thead><tr><th scope="col">Topic</th><th scope="col">Our policy</th></tr></thead>
              <tbody>
                <tr><th scope="row">Payment</th><td>Payment is made on delivery.</td></tr>
                <tr><th scope="row">Availability</th><td>We confirm that your selected piece is available before arranging delivery.</td></tr>
                <tr><th scope="row">Delivery</th><td>Delivery options and charges are confirmed with you directly on WhatsApp.</td></tr>
                <tr><th scope="row">Order time</th><td>Orders take approximately two weeks from confirmation.</td></tr>
                <tr><th scope="row">Custom orders</th><td>Message us to discuss the style, colour and availability before placing your order.</td></tr>
                <tr><th scope="row">Dimensions</th><td>Ask for the exact width × height × depth of the piece you are considering.</td></tr>
                <tr><th scope="row">Leather care</th><td>Ask us for tailored care guidance to help your leather piece age well.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
