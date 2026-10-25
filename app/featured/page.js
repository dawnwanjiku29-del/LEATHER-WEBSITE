import Link from 'next/link';
import { products } from '../products';
import { assetPath } from '../asset-path';
import { SiteFooter, SiteHeader } from '../site-chrome';

const featuredProducts = products.slice(0, 3);

export const metadata = {
  title: 'Featured Leather Pieces | Looking Good Rugged',
  description: 'Discover a considered edit of featured leather bags from Looking Good Rugged.'
};

export default function FeaturedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-intro page-intro-dark">
          <p className="eyebrow">THE EDIT</p>
          <h1>Chosen for the everyday, and beyond.</h1>
          <p>Three dependable pieces that show the spirit of Looking Good Rugged.</p>
        </section>
        <section className="featured-edit" aria-labelledby="featured-title">
          <h2 id="featured-title" className="sr-only">Featured pieces</h2>
          {featuredProducts.map((product) => (
            <article className="featured-piece" key={product.image}>
              <img src={assetPath(`images/optimized/studio/${product.image.replace(/\.[^.]+$/, '.webp')}`)} alt={product.name} />
              <div>
                <p className="eyebrow">{product.tag}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link className="text-link featured-link" href="/shop">Explore the collection <span aria-hidden="true">↘</span></Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
