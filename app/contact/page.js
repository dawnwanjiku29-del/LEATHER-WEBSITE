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
          </div>
          <a className="button" href="https://wa.me/254720929666?text=Hello%20Looking%20Good%20Rugged%2C%20I%20would%20like%20to%20make%20an%20enquiry.">Chat on WhatsApp</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
