import ProductCollection from '../product-collection';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata = {
  title: 'Shop Leather Bags | Looking Good Rugged',
  description: 'Browse handcrafted leather bags, travel pieces, work bags and accessories from Nairobi.'
};

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-intro">
          <p className="eyebrow">THE COLLECTION</p>
          <h1>Pieces with somewhere to go.</h1>
          <p>Explore leather bags and accessories selected for work, weekends and the long way round.</p>
        </section>
        <ProductCollection />
      </main>
      <SiteFooter />
    </>
  );
}
