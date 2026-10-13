'use client';

import { useMemo, useState } from 'react';
import { collectionFilters, products } from './products';

const enquiryAddress = 'lookinggoodrugged@example.com';

export default function ProductCollection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');
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
  const resultLabel = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'piece' : 'pieces'} shown`;

  return (
    <section className="products" id="bags" aria-labelledby="bags-title">
      <div className="heading">
        <p className="eyebrow">OUR COLLECTION</p>
        <h2 id="bags-title">Leather Bags</h2>
        <p>Explore our collection of handcrafted leather products.</p>
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
        {hasFilters && <button className="clear-filters" type="button" onClick={() => { setActiveFilter('all'); setSearch(''); }}>Clear filters</button>}
      </div>

      {visibleProducts.length ? (
        <div className="grid">
          {visibleProducts.map((product) => {
            const subject = encodeURIComponent(`Enquiry: ${product.name}`);
            const body = encodeURIComponent(`Hello Looking Good Rugged,\n\nI would like to enquire about the ${product.name}.\n\nThank you.`);
            return (
              <article className="card" key={product.image}>
                <div className="image-box">
                  <img src={`/images/studio/${product.image}.png`} alt={product.name} />
                </div>
                <div className="info">
                  <span className="tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a className="enquire" href={`mailto:${enquiryAddress}?subject=${subject}&body=${body}`}>Enquire about this bag</a>
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
    </section>
  );
}
