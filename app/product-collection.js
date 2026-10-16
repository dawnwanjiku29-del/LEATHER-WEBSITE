'use client';

import { useMemo, useState } from 'react';
import { collectionFilters, products } from './products';

const whatsappNumber = '254720929666';
export default function ProductCollection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const query = search.trim().toLowerCase();

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = !query || [product.name, product.tag, product.description]
      .join(' ')
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesSearch;
  }), [activeFilter, query]);

  const hasFilters = activeFilter !== 'all' || search;
  const displayedProducts = showAll || hasFilters ? visibleProducts : visibleProducts.slice(0, 8);
  const resultLabel = showAll || hasFilters
    ? `${visibleProducts.length} ${visibleProducts.length === 1 ? 'piece' : 'pieces'} shown`
    : '8 featured pieces';

  function productImage(product) {
    const imageFolder = product.imageNumber >= 19 ? 'cutouts' : 'studio';
    const imageName = product.imageNumber >= 19 ? `bag${product.imageNumber}.png` : product.image;
    return `images/optimized/${imageFolder}/${imageName.replace(/\.[^.]+$/, '.webp')}`;
  }

  function whatsappHref(product) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Looking Good Rugged, I would like to enquire about the ${product.name}. Please share the price and availability.`)}`;
  }

  return (
    <section className="products" id="bags" aria-labelledby="bags-title">
      <div className="heading">
        <p className="eyebrow" id="featured">FEATURED PIECES</p>
        <h2 id="bags-title">Find the one<br /><em>you’ll reach for.</em></h2>
        <p>Explore a considered edit, then browse the complete collection when you are ready.</p>
      </div>

      <div className="catalog-tools" aria-label="Browse the collection">
        <div className="filter-list" aria-label="Filter by collection">
          {collectionFilters.map(([value, label]) => (
            <button
              className={activeFilter === value ? 'filter active' : 'filter'}
              type="button"
              key={value}
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="product-search">
          <span className="sr-only">Search the collection</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search bags and accessories"
          />
        </label>
      </div>

      <div className="catalog-status" role="status" aria-live="polite">
        <span>{resultLabel}</span>
        <div className="catalog-actions">
          {!showAll && !hasFilters && <button className="clear-filters" type="button" onClick={() => setShowAll(true)}>View all pieces</button>}
          {hasFilters && <button className="clear-filters" type="button" onClick={() => { setActiveFilter('all'); setSearch(''); }}>Clear filters</button>}
        </div>
      </div>

      {displayedProducts.length ? (
        <div className="grid">
          {displayedProducts.map((product, index) => {
            return (
              <article className="card" key={product.image}>
                <button className="image-box product-open" type="button" onClick={() => setSelectedProduct(product)} aria-label={`View details for ${product.name}`}>
                  <img
                    className={product.imageNumber >= 19 ? 'product-cutout' : ''}
                    src={productImage(product)}
                    alt={product.name}
                    loading={index < 6 ? 'eager' : 'lazy'}
                    fetchPriority={index < 6 ? 'high' : 'auto'}
                    decoding="async"
                  />
                </button>
                <div className="info">
                  <span className="tag">{product.tag}</span>
                  <h3><button className="product-title" type="button" onClick={() => setSelectedProduct(product)}>{product.name}</button></h3>
                  <p>{product.description}</p>
                  <div className="product-actions"><button className="details-link" type="button" onClick={() => setSelectedProduct(product)}>View details</button><a className="enquire" href={whatsappHref(product)}>Enquire on WhatsApp</a></div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-collection">
          <h3>No matches yet</h3>
          <p>Try another search or clear the filters to see the full collection.</p>
          <button className="button" type="button" onClick={() => { setActiveFilter('all'); setSearch(''); }}>View all pieces</button>
        </div>
      )}

      {selectedProduct && (
        <div className="product-dialog-backdrop" role="presentation" onMouseDown={() => setSelectedProduct(null)}>
          <section className="product-dialog" role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details">×</button>
            <div className="dialog-image"><img src={productImage(selectedProduct)} alt={selectedProduct.name} /></div>
            <div className="dialog-content">
              <p className="eyebrow">{selectedProduct.tag}</p>
              <h3 id="product-dialog-title">{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <dl className="product-facts"><div><dt>Ordering</dt><dd>Price and availability on request</dd></div><div><dt>Collection</dt><dd>{selectedProduct.category}</dd></div><div><dt>Care</dt><dd>Ask us for leather-care guidance</dd></div></dl>
              <a className="button" href={whatsappHref(selectedProduct)}>Ask on WhatsApp</a>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
